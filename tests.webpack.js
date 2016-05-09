const context = require.context('./src', true, /-Spec\.jsx?$/);
context.keys().forEach(context);
