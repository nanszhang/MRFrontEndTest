(function(){
	let productList =[{"productID":"P01_S", "name":"Classic Tee","size":"S", "price":"75.00", "imageSrc":"img/classic-tee.jpg"},
						{"productID":"P01_M", "name":"Classic Tee","size":"M", "price":"75.00", "imageSrc":"img/classic-tee.jpg"},
						{"productID":"P01_L", "name":"Classic Tee","size":"L", "price":"75.00", "imageSrc":"img/classic-tee.jpg"}]

    let Cart=[];
    let selectedItem;

	  $('.dropdown').on('show.bs.dropdown', function () {
	  		$("#cart").addClass('cartOnClick')
		})
		$('.dropdown').on('hide.bs.dropdown', function () {
	  		$("#cart").removeClass('cartOnClick')
		})

    function updateCartContent(){
    		$("#cartDetail").empty();
    		let list = "";
    		let productCount = 0
    		for(let item of Cart){
				list+=`<div class="dropdown-item cart-list-item">
						<div class="row">
							<div class="col-4">
								<img class="img-fluid" src="${item.product.imageSrc}">
							</div>
							<div class="col-8">
								<div class="mb-10">${item.product.name}</div>
								<div class="mb-10">${item.count} x <b>$${item.product.price}</b></div>
								<div class="mb-15">Size: ${item.product.size}</div>
							</div>
						</div>
					</div>`
				productCount +=item.count
    		}

    	$('#cartNumber').text(` ${productCount} `)
		$("#cartDetail").append(list);		
    }

	function addToCart(product)
	{
		let itemIndex = Cart.findIndex((t)=> t.product.productID===product.productID);
		if(itemIndex>-1)
		{
			Cart[itemIndex].count+=1;
		}else{
			let newCartItem={
				product,
				count: 1
			};
			Cart.push(newCartItem);
		}
		updateCartContent();
	}

$('#addToCart').on('click',function(){

	$('.validation-error-message').css("display", "none");
	if(selectedItem){
		addToCart(selectedItem)
		}else{
			$('.validation-error-message').css("display", "block");
		}	
})

$('.sizeBox').on('click',function(){
	$('.sizeBox').removeClass('selected');
	$(this).addClass('selected');
	$("#selected-size").text(this.innerHTML);
	let  productID= $(this).data('productid');
	let index = productList.findIndex((item)=> item.productID===productID);
	if(index>-1)
	{
		selectedItem=productList[index];
	}
})
})()