import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";

function Header() {
	const history = useHistory()
	const [state, setState] = React.useState(false);

	const topReHtml = '<div id="topnavbox" class="ksvObg"><div class="loFzOT"><nav class="gSkwlV kQYcPP"><div class="jKqRar"><div class="bIlqRi"><div class="HeaderLinkSection__Child-sc-1ywcepv-0 hwczam"><div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0"><div style="box-sizing:border-box;display:block;max-width:100%"><img style="max-width:100%;display:block;margin:0;border:none;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"></div><img alt="Matcha avatar" src="static/images/Group146.png" decoding="async" data-nimg="true"  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"></div></div><div class="hwczam"><a class="krXwdd rekrXwdd">IPS</a></div></div></div><div style="overflow-y:visible" class=" kRmVXS"><div style="justify-content:center" class="Layout__LeftColumn-xwa1bz-5 isSquF"><div style="opacity:1;transform:none"  class="efxEZA gfGaun"><div aria-haspopup="listbox" aria-owns="listbox--1" aria-expanded="false" class="HeaderSearchCombobox__StyledCombobox-sc-1qnp1c2-0 gMYApx" data-reach-combobox="" role="combobox"><div class=" eZuBhR"><div class=" lhaqYV"><div class="kQHrWF"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 13 13"><g fill="#ffffff" clip-path="url(#clip0)"><path d="M5.73 11.313a5.535 5.535 0 01-5.529-5.53A5.535 5.535 0 015.731.256c3.048 0 5.528 2.48 5.528 5.529a5.535 5.535 0 01-5.529 5.529zm0-9.479a3.954 3.954 0 00-3.95 3.95 3.954 3.954 0 003.95 3.949 3.954 3.954 0 003.95-3.95 3.954 3.954 0 00-3.95-3.949zM12.608 11.544l-1.89-1.89c-.325.418-.7.792-1.117 1.117l1.89 1.89a.788.788 0 001.117 0 .79.79 0 000-1.117z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M.201.255H12.84v12.638H.201V.255z"></path></clipPath></defs></svg></div><div class=" bOALFv"></div><input id="topinput" aria-autocomplete="both" aria-controls="listbox--1" spellcheck="false" autocorrect="false" autocapitalize="false"  placeholder="Search by space nft or cns..."   class=" jwPKK" data-reach-combobox-input="" value=""><div class=" evJGmq"                                        data-reach-combobox-popover="" tabindex="-1" hidden=""></div></div></div></div></div></div><div class=" dfEcWx"></div></div><div class=" dpVide"></div><div class=" kTswBb"><div style="margin-right:20px" class=" iSfocU"><a href="/"                        class=" krXwdd dvzhdg"><img src="static/images/Group.png" alt="" /><span class="Header__HeaderLinkText-sc-1ye6u80-11 kYqUly">Space NFT</span></a><a                        href="/markets/1/ETH"                        class=" krXwdd zbhps"><img src="static/images/Group-1.png" alt="" /><span class="Header__HeaderLinkText-sc-1ye6u80-11 kYqUly">Cns</span></a><a                        href="/markets/1/ETH"                        class=" krXwdd zbhps"><img src="static/images/docs.png" alt="" /><span class="Header__HeaderLinkText-sc-1ye6u80-11 kYqUly">Docs</span></a></div><div class="AccountMenu__AccountWrapper-sc-12l7ro3-0 eTCCS"><div class="dYtCQC"><button class="dEFVRZ iokAZm"><svg width="14" height="14" viewBox="0 0 12 12" fill="none"  xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#hamburgerClip)"><path d="M11 9H1C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H11C11.2652 11 11.5196 10.8946 11.7071 10.7071C11.8946 10.5196 12 10.2652 12 10C12 9.73478 11.8946 9.48043 11.7071 9.29289C11.5196 9.10536 11.2652 9 11 9Z"  fill="#1F1F41"></path><path  d="M11 1H1C0.734784 1 0.48043 1.10536 0.292893 1.29289C0.105357 1.48043 0 1.73478 0 2C0 2.26522 0.105357 2.51957 0.292893 2.70711C0.48043 2.89464 0.734784 3 1 3H11C11.2652 3 11.5196 2.89464 11.7071 2.70711C11.8946 2.51957 12 2.26522 12 2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1Z" fill="#1F1F41"></path><path d="M11 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H11C11.2652 7 11.5196 6.89464 11.7071 6.70711C11.8946 6.51957 12 6.26522 12 6C12 5.73478 11.8946 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5Z" fill="#1F1F41"></path></g><defs><clipPath id="hamburgerClip"><rect width="14" height="14" fill="#1F1F41"></rect></clipPath></defs></svg><div class="AccountMenu__ImageContainer-sc-12l7ro3-5 cmbyrb"><svg width="16"  height="16" viewBox="0 0 16 16" fill="none"  xmlns="http://www.w3.org/2000/svg"><path   d="M8 10C9.65685 10 11 8.65685 11 7C11 5.34315 9.65685 4 8 4C6.34315 4 5 5.34315 5 7C5 8.65685 6.34315 10 8 10Z" fill="#1F1F41"></path><path  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM12 12.4C11.4 11.7 10.6 11 9 11H7C5.4 11 4.6 11.7 4 12.4C2.8 11.3 2 9.8 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 9.8 13.2 11.3 12 12.4Z"  fill="#1F1F41"></path></svg></div></button></div><div aria-disabled="false" id="upopbox" class="jcrsQt"><div class=" gtnSef"><div class=" dMGGHo"><div style="width: 100%;"><button  class="iokAZm clmjMA" style="height: 53px;">Connect Wallet</button></div></div><div  class="dWITPl fFAsnw"></div><div class=" gKPpmm"></div><div class="dWITPl fFAsnw"><div class="iLDdPW"><a  target="_blank" href="https://matcha.canny.io/request-features"                                        class="BalancesAndActions__ActionsRowItem-sc-19vgf0u-9 kyOKjv"><div class="BalancesAndActions__ActionIconWrapper-sc-19vgf0u-10 bDSASX"><svg width="12" height="16" viewBox="0 0 12 16" fill="none"                                                xmlns="http://www.w3.org/2000/svg"><path                                                    d="M12 6C12 2.7 9.3 0 6 0C2.7 0 0 2.7 0 6C0 8.2 1.2 10.2 3 11.2V13H9V11.2C10.8 10.2 12 8.2 12 6Z"  fill="#1F1F41"></path><path d="M5 16H7C8.1 16 9 15.1 9 14H3C3 15.1 3.9 16 5 16Z"  fill="#1F1F41"></path></svg></div><p                                            class="Typography__P-sc-1ad4zem-5 BalancesAndActions__MenuText-sc-19vgf0u-11 kkEiBN dWJSzf">    Request New Features</p></a><a target="_blank"                                        href="https://buy.moonpay.com/?apiKey=pk_live_J3JbkhjNlKmUeCekq0afaSQbXP4cDS1A&amp;currencyCode=null" style="text-decoration: none;"><a                                            class="BalancesAndActions__ActionsRowItem-sc-19vgf0u-9 kyOKjv"><div                                                class="BalancesAndActions__ActionIconWrapper-sc-19vgf0u-10 bDSASX"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12"                                                    fill="none" viewBox="0 0 16 12" transform="scale(1.2)"><path fill="#1F1F41"                                                        d="M16 3V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v2h16zM0 5v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5H0zm6 4H2V8h4v1zm8 0h-2V8h2v1z"></path></svg></div><p                                                class="Typography__P-sc-1ad4zem-5 BalancesAndActions__MenuText-sc-19vgf0u-11 kkEiBN dWJSzf"> Buy Crypto with Fiat</p></a></a><a target="_blank" rel="noopener"  href="http://help.matcha.xyz/en/collections/2207940-faq"                                        class="BalancesAndActions__ActionsRowItem-sc-19vgf0u-9 kyOKjv"><div class="BalancesAndActions__ActionIconWrapper-sc-19vgf0u-10 bDSASX"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z"                                                    fill="#1F1F41"></path></svg></div><p  class="Typography__P-sc-1ad4zem-5 BalancesAndActions__MenuText-sc-19vgf0u-11 kkEiBN dWJSzf">  Help Center</p></a><a rel="noopener"                                        class="BalancesAndActions__ActionsRowItem-sc-19vgf0u-9 kyOKjv"><div class="BalancesAndActions__ActionIconWrapper-sc-19vgf0u-10 bDSASX"><button   class="BaseButton-zyn1rf-0 ThemeToggler__ToggleButton-sc-1ia2dkf-0 iokAZm jkMCOi"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 24 24" color="#1F1F41" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"  style="cursor: pointer; transform: rotate(40deg);"><mask id="circle-mask-1"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect><circle r="9" fill="black" style="cx: 50%; cy: 23%;"></circle></mask><circle cx="12" cy="12" fill="#1F1F41"  mask="url(#circle-mask-1)" style="r: 9px;"></circle><g stroke="currentColor" style="opacity: 0;"><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></g></svg></button></div><p class="kkEiBN dWJSzf"> Switch to Dark Mode</p></a></div></div></div></div></div></div></nav></div></div>'

	let upopbox: Element| null
	const showpop = (event:any) => {
		upopbox = document.querySelector("#upopbox")
		if(upopbox && !event){
			let cn = upopbox.className
			upopbox.className = (cn === 'bBmPMw' || !cn)? 'jcrsQt': 'bBmPMw'
			return
		 }
		 if (event && upopbox) {
           if (upopbox.className === 'bBmPMw') {
			upopbox.className = 'jcrsQt'
		   }
		 }
	}

	const getScrollTop = () => {
        let scrollTop = 0;

        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }

        return scrollTop;
    }

	const pupScroll = () => {
		let stopv = getScrollTop()
		let topnavbox : Element | null = document.querySelector('#topnavbox');
		let topinput: Element | null = document.querySelector('#topinput');
        if (topnavbox && topinput) {
          if(stopv === 0){
            topnavbox.className = 'ksvObg'
			topinput.className = 'jwPKK'
		  }
		  if(stopv > 68){
            topnavbox.className = 'gTNKWJ'
			topinput.className = 'jxZNDP'
		  }
		}
	}

 
    let dEFVRZ: Element | null;
	useEffect(() => {
		 document.addEventListener("click", showpop);
		 dEFVRZ = document.querySelector('.dEFVRZ')
		 dEFVRZ?.addEventListener('click', (e:any)=>{
			e.stopPropagation()
			showpop(null)
		 })
	 
	     document.addEventListener("scroll", pupScroll)
		return () => {
			document.removeEventListener("click", showpop);
			dEFVRZ = null
		    document.removeEventListener("scroll", pupScroll)
		};
	}, [showpop]);


	return (
		<React.Fragment>
		  <div dangerouslySetInnerHTML={{__html: topReHtml}}></div>
		</React.Fragment>
	)
}
export default Header