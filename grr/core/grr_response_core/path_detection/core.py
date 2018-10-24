#!/usr/bin/env python
"""The path detection interface (base) class definitions."""

from __future__ import absolute_import
from __future__ import unicode_literals

import abc
import shlex
from future.utils import with_metaclass


def SplitIntoComponents(str_in):
  """Splits strings into space-separated components.

  The difference between SplitIntoComponents and .split(" ") is that
  the former tries to respect single and double quotes and strip them
  using lexical rules typically used in command line interpreters.

  Args:
    str_in: Source string to be split into components.

  Returns:
    str_in represented as a list of components. Components is effectively a
    space-separated representation of a source string. " ".join(components)
    should produce the original string (with pairs of single/double quotes
    stripped).
  """

  if str_in.startswith(("\"", "'")):
    return shlex.split(str_in)
  else:
    components = str_in.split(" ", 1)
    if len(components) > 1:
      return [components[0]] + SplitIntoComponents(components[1])
    else:
      return components


class Extractor(with_metaclass(abc.ABCMeta, object)):
  """Base class for paths extractors."""

  @abc.abstractmethod
  def Extract(self, components):
    """Extracts interesting paths from a given path.

    Args:
      components: Source string represented as a list of components. Components
          are generated by applying SplitIntoComponents to a string.
          Components is effectively a space-separated representation of a
          source string. " ".join(components) should produce the original string
          (with pairs of single/double quotes stripped). See
          SplitIntoComponents for details.

    Returns:
      A list of extracted paths (as strings).
    """
    raise NotImplementedError()


class PostProcessor(with_metaclass(abc.ABCMeta, object)):
  """Base class for paths post-processors."""

  @abc.abstractmethod
  def Process(self, path):
    """Post-processes given detected path.

    Args:
      path: Path (as a string) to post-process.

    Returns:
      A list of processed paths.
    """
    raise NotImplementedError()


class Detector(object):
  """Configurable class that implements all detection steps."""

  def __init__(self, extractors=None, post_processors=None):
    """Detector constructor.

    Detector is configured with a list of extractors and a list of post
    processors. When Detect() is called, Detector will first split the
    source string into components using SplitIntoComponents function,
    then it will feed the resulting components to extractors. Whatever
    the extractors produce will be fed to post processors and then
    returned to the user.

    Args:
      extractors: Extractors to be applied to source strings.
      post_processors: Post processors to be applied to source strings.
    """
    self.extractors = extractors or []
    self.post_processors = post_processors or []

  def Detect(self, str_in):
    """Detects paths in a given string.

    Args:
      str_in: String where the paths should be detected.

    Returns:
      A list of paths (as strings) detected inside the given string.
    """

    components = SplitIntoComponents(str_in)

    extracted_paths = set()
    for extractor in self.extractors:
      extracted_paths.update(extractor.Extract(components))

    results = set(extracted_paths)

    for post_processor in self.post_processors:
      processed_results = set()
      for result in results:
        processed_results.update(post_processor.Process(result))
      results = processed_results

    return results
