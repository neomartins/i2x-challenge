'use strict';

import requireDir from 'require-dir';

// importa todas as tarefas em gulp/tasks, incluindo subfolders
requireDir('./gulp/tasks', {
    recurse: true
});
