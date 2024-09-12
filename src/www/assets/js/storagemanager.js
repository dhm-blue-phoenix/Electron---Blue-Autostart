import { initializing } from '../initializing.js';

const delItemToStorage = (item, id) => {
    let apps = loadToStorage();
    apps.splice(id, 1);
    apps.push(item);
    localStorage.removeItem('apps');
    saveToStorage(apps);
};

const loadToStorage = () => {
    return JSON.parse(localStorage.getItem('apps'));
};

const saveToStorage = (apps) => {
    const storedApps = loadToStorage() || [];
    let sortedApps;
    if (Array.isArray(apps)) {
        sortedApps = sorttedToStrings(apps);
    } else {
        storedApps.push(apps);
        sortedApps = sorttedToStrings(storedApps);
    };
    localStorage.setItem('apps', JSON.stringify(sortedApps));
    // window.location.reload();
    initializing();
};

const sorttedToStrings = (apps) => {
    return apps.sort((first, second) => first.name.localeCompare(second.name));
};

export { delItemToStorage, loadToStorage, saveToStorage };