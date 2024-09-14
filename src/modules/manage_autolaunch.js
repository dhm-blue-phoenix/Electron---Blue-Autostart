const AutoLaunch = require('auto-launch');

const registeAutoLaunch = async (path, name, activ) => {
    try {
        console.log('[registeAutoLaunch] Program: Name:', name, 'Pfad:', path, 'Aktivieren:', activ);
        const launcher = new AutoLaunch({
            name: name,
            path: path
        });
        const isEnabled = await launcher.isEnabled();
        if (activ) {
            if (!isEnabled) {
                await launcher.enable();
                return console.log('[registeAutoLaunch] Program: Name:', name, 'Programm wurde erfolgreich aktiviert.');
            };
            return console.log('[registeAutoLaunch] Program: Name:', name, 'ist bereits aktiviert.');
        };
        if (isEnabled) {
            await launcher.disable();
            return console.log('[registeAutoLaunch] Program: Name:', name, 'wurde deaktiviert.');
        };
        console.log('[registeAutoLaunch] Program: Name:', name, 'war bereits deaktiviert.');
    } catch (err) {
        console.error('[registeAutoLaunch] Es ist ein Problem beim Verwalten des AutoLaunch aufgetreten:', err);
    };
};

module.exports = { registeAutoLaunch };