function getAdmins(map){
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
}

const userRoles = new Map();

userRoles.set('Diego', 'SUDO');
userRoles.set('Fulano', 'ADMIN');
userRoles.set('Ana', 'ADMIN');
userRoles.set('Beatriz', 'USER');
userRoles.set('Ciclano', 'USER');

console.log(getAdmins(userRoles));