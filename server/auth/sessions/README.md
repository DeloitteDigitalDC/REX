REX
=================

#File Session Store

This directory stores user sessions using the express plugin [session-file-store](https://github.com/valery-barysok/session-file-store).

Usually sessions would be stored in a database or other persistance storage, but to reduce the need for external dependencies the simple
file store is being used instead.

**It is safe to delete any of the .json files in this directory, but do not remove the directory itself.**
