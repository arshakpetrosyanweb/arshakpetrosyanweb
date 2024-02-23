console.log('index module');

export let init = () => {
	console.log('index module init');
	fetch('http://127.0.0.1:5000/products')
		.then(data=>data.json())
		.then((data)=>{renderProducts(data);});
}

function setcolors(product){
	let items = product.colors.map((color) => {
		// let item = document.createElement('span');
		// item.style.display = 'inline-block';
		// item.style.with = '15px';
		// item.style.height = '15px';
		// item.style.border = '2px solid black';
		// return item;
		return `<span style="display: inline-block;width: 15px;height: 15px; border: 2px solid black; background-color: ${color};border-radius: 50%;"></span> &nbsp;`;
	});

	return items.join('');
}

let renderProducts = (products) => {
	let html = products.map((product)=>{
		let colors = product.colors;
		product.colors = [];
		if (colors.includes('+')) {
			product.colors=colors.split('+');
		}else{
			product.colors.push(colors);
		}
		return `
            <div class="card">
               <div class="card_image" style='
                   background-image: url("http://localhost:5000/uploads");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
               '></div>
               <div class="card_info">
                    <h3>title</h3>
                    <br>
                    ${setcolors(product)}
                  	<br><br>
                  	<span>Price <b></b> AMD</span>
                  	<div class="card_info_footer">
                     	<a class="more_info_link" href="/products/show/">
                        	more info
                    	 </a>
                  	</div>
               </div>
            </div>
         

		`;
	});
	html.forEach((html)=>{
		document.getElementById('cards').innerHTML += html;
	})

}

