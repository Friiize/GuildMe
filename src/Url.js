module.exports = class Url {
    constructor(nom, realm) {
        this.nom = nom;
        this.realm = realm;
    }

    request() {
        return `https://eu.api.blizzard.com/profile/wow/character/${this.realm}/${this.nom}/appearance?namespace=profile-eu&locale=fr_EU&access_token=US0BLnJzQqZENCgnGDyHpaBO9OQad7RMaC`;
    }
}