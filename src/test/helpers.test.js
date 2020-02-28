const { splitCommand } = require('../helpers');

describe('Test la séparation du prefixe de la commande', () => {
    test('No Params', async () => {
        expect(splitCommand('!ping')).resolves.toEqual(['!ping', []]);
    });

    test('Multiple Params', () => {
        expect(splitCommand('!test Oui Oui2')).resolves.toEqual(['!test', ['Oui', 'Oui2']]);
    })

    test('One Param', () => {
        expect(splitCommand('!kick Julien')).resolves.toEqual(['!kick', ['Julien']]);
    })

    test('not a command', () => {
        expect(splitCommand('kick Julien')).rejects.toEqual(new Error("content passed is not a command"));
    })
});