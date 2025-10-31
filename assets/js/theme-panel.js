    let url = window.location.href;
function findStringInURL(searchString) {
    const currentURL = window.location.href;
    return currentURL.includes(searchString);
}

function get_basename() {

	// Remove trailing slash if it exists
	if (url.endsWith('/')) {
		url = url.slice(0, -1);
	}

	// Get the basename
	return url.substring(url.lastIndexOf('/') + 1);
}

function ath_wp_footer_hook() {
    const siteUrl = window.location.href;

 

    let buy_link 	= '';
    let doc_link 	= '';
    let demo_link 	= '';
    let item 		= '';
    let wp_demo 	= '';
	


	
	if(findStringInURL('html-preview')) {
		var item_name = url.split('/html-preview/')[1]?.split('/')[0];
		item	=	item_name+'-html';
	}
	else{
		item =   url.replace(window.location.origin + '/', '').split('/')[0];
	}
	
	
		
    if (awaikenThemes[item]) {
        buy_link = awaikenThemes[item]['buy_link'];

        if (awaikenThemes[item]['doc_link']) {
            doc_link = awaikenThemes[item]['doc_link'];
        }
        
        if (awaikenThemes[item]['demo_link']) {
            demo_link = awaikenThemes[item]['demo_link'];
        }
		
		 if (awaikenThemes[item]['wp_demo']) {
            wp_demo = awaikenThemes[item]['wp_demo'];
         }
 
        const themePanel = `
		<div class="explore_theme_panel">
			${doc_link ? `<a href="${doc_link}" target="_blank" title="Documentation"><i class="fas fa-file-lines"></i></a>` : ''}
			<a href="${buy_link}" target="_blank" title="Buy Now"><i class="fas fa-cart-shopping"></i></a> ${wp_demo ? `<a href="${wp_demo}" target="_blank" title="WordPress Theme Demo"><i class="fa-brands fa-wordpress"></i></a>` : ''}</div>
			<style type="text/css">
				.explore_theme_panel {
					width: 50px;
					position: fixed;
					top: 50%;
					right: 0;
					background: #fff;
					transform: translateY(-50%);
					border-top: 1px solid #e8e8e8;
					border-left: 1px solid #e8e8e8;
					border-bottom: 1px solid #e8e8e8;
					border-radius: 10px 0 0 10px;
					z-index: 10000;
				}
				.explore_theme_panel a {
					position: relative;
					width: 50px;
					height: 50px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 22px;
					color: #333;
					transition: all 0.4s ease-in-out;
					border-bottom: 1px solid #e8e8e8;
				}
				.explore_theme_panel a:last-child {
					border-bottom: none;
				}
				.demo-theme-popup {
  width: 390px;
  height: 120px;
  background: #FFF;
  bottom: 20px;
  right: -390px;
  position: fixed;
  border-radius: 5px;
  border:1px solid #0000001f;
  transition: 0.5s;
  z-index: 999;
  padding:35px 20px;
  color: #707070;
  font-size: 16px;
  text-align: center;
}
.demo-theme-popup a {
    font-weight: bold;
    color: #000;
    text-decoration: underline;
}

.dtp-close {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 500;
}

.dtp-ns-close {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 4px;
  top: 4px;
  overflow: hidden;
  text-indent: 100%;
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.dtp-ns-close:hover, .dtp-ns-close:focus {
  outline: none;
}
.dtp-ns-close::before, .dtp-ns-close::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 60%;
  top: 50%;
  left: 50%;
  background: #fff;
}
.dtp-ns-close:hover::before, .dtp-ns-close:hover::after {
  background: #fff;
}
.dtp-ns-close::before {
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
.dtp-ns-close::after {
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
}

@keyframes dtp-bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.dtp-bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@media (max-width: 728px) {
  .demo-theme-popup {
    width: 280px;
  }
}
			</style>`;
			document.body.insertAdjacentHTML('beforeend', themePanel);

         // Select all elements with the .buy-link class
        const buyLinkElements = document.querySelectorAll('.buy-link');
    
        // Loop through each element and set the href attribute
        buyLinkElements.forEach(element => {
            element.href = buy_link;
        });
        
        // Select all elements with the .demo-link class
        const demoLinkElements = document.querySelectorAll('.demo-link');
    
        // Loop through each element and set the href attribute
        demoLinkElements.forEach(element => {
            element.href = demo_link;
        });

    
	if (awaikenThemes[item]['wp_demo']) {
		console.log(awaikenThemes[item]['wp_demo']);
		
		/* Popup */
		
		  var popup = document.createElement("div");
			popup.classList.add("demo-theme-popup");
			popup.innerHTML = `<div class="">
    <div class="dtp-close dtp-ns-close"></div>
	Looking For WordPress Theme? <br> <a href="${wp_demo}" target="_blank" title="WordPress Theme Demo">View Demo</a>
  </div>`;
			document.body.appendChild(popup);
		
		//document.addEventListener("DOMContentLoaded", function() {
			window.addEventListener("scroll", function() {
				const threshold = 1000;
				//if (window.scrollY >= (document.documentElement.scrollHeight - window.innerHeight - 4500)) {
			    if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight - threshold)) {
					popup.style.right = "20px";
				} else {
					popup.style.right = "-390px";
				}
			});

			document.querySelector('.dtp-close').addEventListener("click", function() {
				document.querySelector('.dtp-popup').style.display = "none";
			});
		//}); 

		/* Popup */
	}
	
	}
	
}

document.addEventListener("DOMContentLoaded", ath_wp_footer_hook);
