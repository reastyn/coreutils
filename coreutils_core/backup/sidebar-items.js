initSidebarItems({"enum":[["BackupMode","Convenience Enum to represent the different backup modes. See module documentation for an in-depth overview of what each backup mode means/does."]],"fn":[["create_existing_backup","Creates a backup in-keeping with previous backups. Pokes the directory to see whether there are any numbered or simple backups of the input `file`. If numbered backups are found, a numbered backup will be created. Else, a simple backup is created using the input `suffix`"],["create_numbered_backup","Creates a numbered backup. Does so by taking the input `file` and poking the parent directory to find a file of the form `<file>~<X>~` where `X` is a number. If none can be found, a backup file is created where `X` is `1`. Else, it creates a backup file where `X` is `X + 1`."],["create_simple_backup","Creates a simple backup. Creates a backup of the form `<file><suffix>`. Overwrites any previous backup files with that same suffix."]]});