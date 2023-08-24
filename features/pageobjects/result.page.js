const { expect, $ } = require('@wdio/globals')
const { browser } = require('@wdio/globals')

class ResultPage{

    get resultMessageText () {
        // return $("//*[contains(@text, 'Todos')]");
        return $("=Todos");
    }

    get countliInlu(){
        return $$("//div[@id='srp-river-results']/ul/li");
    }

    async resultMessage () {
        // await browser.pause(1000)
        await expect(this.resultMessageText).toBeExisting();
        // await expect(this.resultMessageText).toHaveTextContaining(message);
        let listaDeElementos = await this.countliInlu;
        console.log(`\n\n\n\n\n\n\n\n\n\n\n`);

        let cont = 0;

        for (let index = 0; index < listaDeElementos.length; index++) {
            const element = await listaDeElementos[index].getText();
            console.log("\n-----------------------------\n");
            console.log(`\nPosicion: ${index}\n`);
            console.log(`\nElemento:\n\n${element} \n`);
            

            const regex = /^Estado\nCategory\nPrecio\nTodos los filtros\s*$/;
            const resultado = regex.test(element);

            const regex2 = /^Búsquedas relacionadas\npilas dewalt\npilas recargables$/;
            const resultad2 = regex2.test(element);

            const regex3 = /^(1\n2\n3\n4\n5)$/m;
            const resultad3 = regex3.test(element);

            console.log("/(Estado|Category|Precio|Todos los filtros)/ "+resultado);
            console.log("/(Búsquedas relacionadas|pilas dewalt|pilas recargables)/   "+resultad2);
            console.log("/^(1 2 3 4 5)$/m;    "+resultad3);

            if(resultado==true || regex2==true || resultad3==true){

            }else{
                console.log("\n-------Cuento-------\n");
                cont=cont+1;
            }
            console.log("\n-----------------------------\n");
        }
       
        console.log("\n\n\nCantidad de items: " + cont + "\n\n"); 

    }
}

module.exports = new ResultPage();
