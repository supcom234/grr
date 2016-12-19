#!/usr/bin/env python
"""UI server report handling classes."""

import itertools
import math

from grr.gui.api_plugins.report_plugins import rdf_report_plugins
from grr.gui.api_plugins.report_plugins import report_plugin_base

from grr.lib import aff4
from grr.lib.aff4_objects import stats as aff4_stats

TYPE = rdf_report_plugins.ApiReportDescriptor.ReportType.FILE_STORE


class FileClientCountReportPlugin(report_plugin_base.ReportPluginBase):
  """Reports file frequency by client count."""

  TYPE = TYPE
  TITLE = "Client Count"
  SUMMARY = ("File frequency by client count. Number of files seen on 0, 1, 5 "
             "etc. clients. X: number of clients, Y: number of files. Hover to "
             "show exact numbers.")

  def GetReportData(self, get_report_args, token):
    """Report file frequency by client count."""
    ret = rdf_report_plugins.ApiReportData(
        representation_type=rdf_report_plugins.ApiReportData.RepresentationType.
        STACK_CHART)

    try:
      fd = aff4.FACTORY.Open("aff4:/stats/FileStoreStats", token=token)
      graph = fd.Get(
          aff4_stats.FilestoreStats.SchemaCls.FILESTORE_CLIENTCOUNT_HISTOGRAM)

      data = graph.data if graph else ()

      ret.stack_chart.data = (
          rdf_report_plugins.ApiReportDataSeries2D(
              label=str(point.x_value),
              points=(rdf_report_plugins.ApiReportDataPoint2D(
                  x=point.x_value, y=point.y_value),)  # 1-elem tuple
          ) for point in data)

    except (IOError, TypeError):
      pass

    return ret


class FileSizeDistributionReportPlugin(report_plugin_base.ReportPluginBase):
  """Reports file frequency by client count."""

  TYPE = TYPE
  TITLE = "File Size Distribution"
  SUMMARY = ("Number of files in filestore by size. X: log10 (filesize), Y: "
             "Number of files.")

  def _Log(self, x):
    # Note 0 and 1 are collapsed into a single category
    return math.log10(x) if x > 0 else x

  def _BytesToHumanReadable(self, x):
    units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"]

    for u in units:
      # Our linter complains when a loop variable is used after the loop (though
      # it's valid to do so in Python). Assigning the loop variable to another
      # variable makes the linter happy.
      unit = u

      if x < 1024:
        break

      if not isinstance(x, float) and x % 1024 != 0:
        x = float(x)

      if unit != units[-1]:
        x /= 1024

    if not isinstance(x, float):
      return "%d %s" % (x, unit)
    return "%.1f %s" % (x, unit)

  def GetReportData(self, get_report_args, token):
    """Report file frequency by client count."""
    x_ticks = []
    for e in xrange(15):
      x = 32**e

      x_ticks.append(
          rdf_report_plugins.ApiReportTickSpecifier(
              x=self._Log(x), label=self._BytesToHumanReadable(x)))

    ret = rdf_report_plugins.ApiReportData(
        representation_type=rdf_report_plugins.ApiReportData.RepresentationType.
        STACK_CHART,
        stack_chart=rdf_report_plugins.ApiStackChartReportData(
            x_ticks=x_ticks, bar_width=.2))

    data = ()
    try:
      fd = aff4.FACTORY.Open("aff4:/stats/FileStoreStats", token=token)
      graph = fd.Get(
          aff4_stats.FilestoreStats.SchemaCls.FILESTORE_FILESIZE_HISTOGRAM)

      if graph:
        data = graph.data
    except (IOError, TypeError):
      pass

    xs = [point.x_value for point in data]
    ys = [point.y_value for point in data]

    labels = [
        "%s - %s" % (self._BytesToHumanReadable(int(x0)),
                     self._BytesToHumanReadable(int(x1)))
        for x0, x1 in itertools.izip(xs[:-1], xs[1:])
    ]
    last_x = data[-1].x_value
    labels.append(
        # \u221E is the infinity sign.
        u"%s - \u221E" % self._BytesToHumanReadable(int(last_x)))

    ret.stack_chart.data = (rdf_report_plugins.ApiReportDataSeries2D(
        label=label,
        points=[rdf_report_plugins.ApiReportDataPoint2D(
            x=self._Log(x), y=y)])
                            for label, x, y in itertools.izip(labels, xs, ys))

    return ret
