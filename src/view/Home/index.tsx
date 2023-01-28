import {useEffect,useState} from "react";
import coordInit from "./components/coord.js";
import Auction from "./components/auction"
import IPSIntroduce from "./components/ips-Introduce"
import SellaDlforEth from "../../components/sellaDlforEth"
import Mindmap from "./components/mindmap"
import Footer from "../../components/Footer/index";

// img ---
import { ImageData, getNounSeedFromBlockHash, getNounData } from '@nouns/assets';
import { buildSVG } from './svg-builder';
const { palette } = ImageData;
// --- 

export default function Home() {


	const getImgData = () => {
		const blockHash = '0x5014101691e81d79a2eba711e698118e1a90c9be7acb2f40d7f200134ee53e01';
		const nounId = 116;
		const seed = getNounSeedFromBlockHash(nounId, blockHash);
		const { parts, background } = getNounData(seed);
		const svgBinary = buildSVG(parts, palette, background);
		const svgBase64 = btoa(svgBinary);
		return svgBase64;
	}

	// const [mtpx, setMtpx] = useState(600)
    let canvasbox: Element | null;
	useEffect(() => {
		console.dir(getImgData())
		canvasbox = document.querySelector('.canvasbox')
		coordInit(canvasbox)
	   return () => {
		canvasbox = null
	   };
   }, []);
	
	return (<>
	 <div className="kmRSNz"></div>
	 <div className="topmt68px"></div>
	 <div className="canvasbox"></div>
	 <div className="onCanvarEvent"></div>
	 <div className="blankboxh120"></div>
     <Auction/>
	 <IPSIntroduce/>
	 <SellaDlforEth/>
	 <Mindmap/>
	 <Footer/>
	</>)
}
