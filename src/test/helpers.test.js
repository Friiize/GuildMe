const { splitCommand } = require('../helpers');

describe('Test la séparation du prefixe de la commande', () => {
    test('No Params', () => {
        expect(splitCommand('!ping')).resolves.toEqual(['!ping', ['']]);
    });

    test('Multiple Params', () => {
        expect(splitCommand('!test Oui Oui2')).resolves.toEqual(['!test', ['Oui', 'Oui2']]);
    })

    test('One Param', () => {
        expect(splitCommand('!kick Julien')).resolves.toEqual(['!kick', ['Julien']]);
    })
});