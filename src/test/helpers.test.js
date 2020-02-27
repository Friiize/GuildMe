const { splitCommand } = require('../helpers');

describe('Test la séparation du prefixe de la commande', () => {
    test('No Params', () => {
        expect(splitCommand('!ping')).toEqual('');
    });

    test('Multiple Params', () => {
        expect(splitCommand('!test Oui Oui2')).toEqual(['Oui', 'Oui2']);
    })

    test('One Param', () => {
        expect(splitCommand('!kick Julien')).toEqual('Julien');
    })
});