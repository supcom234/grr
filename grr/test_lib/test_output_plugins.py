#!/usr/bin/env python
"""Output plugins that are used in flow tests."""
from __future__ import absolute_import

from grr_response_server import output_plugin


class DummyFlowOutputPlugin(output_plugin.OutputPlugin):
  """Dummy plugin that opens a dummy stream."""
  num_calls = 0
  num_responses = 0

  def ProcessResponses(self, responses):
    DummyFlowOutputPlugin.num_calls += 1
    DummyFlowOutputPlugin.num_responses += len(list(responses))


class FailingDummyFlowOutputPlugin(output_plugin.OutputPlugin):

  def ProcessResponses(self, responses):
    del responses
    raise RuntimeError("Oh no!")
