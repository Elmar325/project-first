class Products{

    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({ picture, name, description}) => {
            // html code  |
                      //  \/
            htmlCatalog += `
            <li class="li" data-aos="fade-right">
            <img class="images" src ="${picture}" />
            <h3 class="h3">${name}</h3>
            <p class="p">${description}</p>
            <input class= "btn" type="button" value="ORDER NOW!" id="btn_down">

            </li>
            `;
        });
        const html = `
         <ul class="ul">
         ${htmlCatalog}
         </ul>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }

}
const productsPage = new Products();
productsPage.render();