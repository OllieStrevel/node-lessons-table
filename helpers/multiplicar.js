const colors = require('colors')
const fs = require('fs')

const createFile = async (multiplier = 5, list = false, until = 10) =>
{
    try
    {
        let output = '', _console = '';
        let filename = `table-${multiplier}.txt`;

        for (let i = 1; i <= until; i++) {
            _console += `${multiplier} ${'x'.green} ${i} ${'='.yellow} ${multiplier * i}\n`;
            output += `${multiplier} x ${i} = ${multiplier * i}\n`;
        }

        if(list)
        {
            console.log( '====================='.rainbow );
            console.log( '    Tabla del:', multiplier );
            console.log( '====================='.rainbow );
            console.log( _console );
        }

        fs.writeFileSync( `./output/${filename}`, output )
        return filename;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createFile
}