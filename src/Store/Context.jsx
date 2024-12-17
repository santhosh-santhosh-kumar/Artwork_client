import { createContext, useEffect, useState } from "react";
import portrait1 from "../assets/images/Portrait painting/361737384_1745605969189201_8157109678283060689_n.jpg";
import portrait2 from "../assets/images/Portrait painting/363294872_1664863147315367_166675253636546673_n.jpg";
import portrait3 from "../assets/images/Portrait painting/363813685_286971947250485_417454627802088322_n.jpg";
import portrait4 from "../assets/images/Portrait painting/366530266_1476227363202178_7862265953427774467_n.jpg";
import portrait5 from "../assets/images/Portrait painting/442434022_25790692617188340_695091803987587132_n.jpg";
import portrait6 from "../assets/images/Portrait painting/445587551_1141813590418889_2295292086241949719_n.jpg";

import figure1 from "../assets/images/Figure Painting/356787171_1189094431785768_8950889178167972503_n.jpg";
import figure2 from "../assets/images/Figure Painting/371025194_822120379365034_3203485252796268776_n.jpg";
import figure3 from "../assets/images/Figure Painting/373247697_246989518306424_837879749933383715_n.jpg";
import figure4 from "../assets/images/Figure Painting/373690454_296198293012731_8655207232375535644_n.jpg";
import figure5 from "../assets/images/Figure Painting/375777606_1298375121071650_1811815160214464499_n.jpg";
import figure6 from "../assets/images/Figure Painting/377997581_323231330247180_8753330200602137189_n.jpg";
import figure7 from "../assets/images/Figure Painting/381171026_860543212345713_4557380063283185253_n.jpg";
import figure8 from "../assets/images/Figure Painting/383236847_852685816154955_2106730470891852766_n.jpg";
import figure9 from "../assets/images/Figure Painting/385844871_286946590807649_8697859260018593874_n.jpg";
import figure10 from "../assets/images/Figure Painting/404056027_341075938501892_6714879897441160983_n.jpg";
import figure11 from "../assets/images/Figure Painting/441029851_1395720604443094_5613417350515651646_n.jpg";
import figure12 from "../assets/images/Figure Painting/448150921_964017118841655_3459377718573840922_n.jpg";
import figure13 from "../assets/images/Figure Painting/451394341_1917119075409037_8289552787583975568_n.jpg";
import figure14 from "../assets/images/Figure Painting/457199021_18017264348601725_4672278398921156714_n.jpg";

import abstract1 from "../assets/images/Abstract Painting/355840219_587622180190293_6135723681394209289_n.jpg";
import abstract2 from "../assets/images/Abstract Painting/356230352_583415793873913_3526123968177403826_n.jpg";
import abstract3 from "../assets/images/Abstract Painting/359464578_238540735662360_3604186813631442294_n.jpg";
import abstract4 from "../assets/images/Abstract Painting/363908183_1040856527045220_6927438386513524732_n.jpg";

import jewelry1 from "../assets/images/jewellary/202741572_797653961115594_7731965526858357466_n.jpg"; 
import jewelry2 from "../assets/images/jewellary/202906763_813317822649679_3984283430883934327_n.jpg"; 
import jewelry3 from "../assets/images/jewellary/212582467_1623200137876601_2569705543060557290_n.jpg"; 
import jewelry4 from "../assets/images/jewellary/250624391_418657116576785_4655775350261783533_n.jpg"; 
import jewelry5 from "../assets/images/jewellary/258784269_3108627106092241_572770414340829841_n.jpg"; 
import jewelry6 from "../assets/images/jewellary/269955493_969437446980346_2407742515592380682_n.jpg"; 
import jewelry7 from "../assets/images/jewellary/270260366_424825166016426_3926621100694394916_n.jpg"; 
import jewelry8 from "../assets/images/jewellary/271155733_3227945834103546_3743225854466724033_n.jpg"; 
import jewelry9 from "../assets/images/jewellary/271314876_1298930260605981_4599460024023545013_n.jpg"; 
import jewelry10 from "../assets/images/jewellary/271838556_214652710787604_3909561292377197865_n.jpg"; 
import jewelry11 from "../assets/images/jewellary/271981552_5523375791012012_7186016769463800589_n.jpg"; 
import jewelry12 from "../assets/images/jewellary/272002860_136128502198377_3513433395893155010_n.jpg"; 
import jewelry13 from "../assets/images/jewellary/272230313_486802636198685_310771548629050600_n.jpg"; 
import jewelry14 from "../assets/images/jewellary/272370601_492625672281783_3559749649353247209_n.jpg"; 
import jewelry15 from "../assets/images/jewellary/272461230_494572225622823_6014675693197776731_n.jpg"; 
import jewelry16 from "../assets/images/jewellary/272734797_4832612426787771_3005327660065547113_n.jpg"; 
import jewelry17 from "../assets/images/jewellary/273965319_4817587104990814_2487086275051776129_n.jpg"; 
import jewelry18 from "../assets/images/jewellary/274184187_1064271640789143_1257587934406689765_n.jpg"; 
import jewelry19 from "../assets/images/jewellary/276981550_2764110520556882_5156428351168075738_n.jpg"; 
import jewelry20 from "../assets/images/jewellary/279572099_311073111172910_691974501656797388_n.jpg"; 

import Alter from "../assets/images/Alter_Image/WhatsApp Image 2024-12-17 at 9.01.03 AM.jpeg"

export const ContextProvide = createContext();

export function Context(props) {
  const portraitArray = [
    {id:0,img:portrait1,alter:Alter},
    {id:1,img:portrait2,alter:Alter},
    {id:2,img:portrait3,alter:Alter},
    {id:3,img:portrait4,alter:Alter},
    {id:4,img:portrait5,alter:Alter},
    {id:5,img:portrait6,alter:Alter},
  ];
  const figure = [
    {id:0,img:figure1 },
    {id:1 ,img:figure2 },
    {id:2 ,img:figure3 },
    {id:3 ,img:figure4 },
    {id:4 ,img:figure5 },
    {id:5 ,img:figure6 },
    {id:6 ,img:figure7 },
    {id:7 ,img:figure8 },
    {id:8 ,img:figure9 },
    {id:9 ,img:figure10},
    {id:10,img:figure11},
    {id:11,img:figure12},
    {id:12,img:figure13},
    {id:13,img:figure14},
  ];
  const abstract =[
    {id:0,img:abstract1},
    {id:1,img:abstract2},
    {id:2,img:abstract3},
    {id:3,img:abstract4}
  ]
  const jewelry=[{id:0,img:jewelry1 },
    {id:1,img:jewelry2 ,},
    {id:2 ,img:jewelry3 ,},
    {id:3 ,img:jewelry4 ,},
    {id:4 ,img:jewelry5 ,},
    {id:5 ,img:jewelry6 ,},
    {id:6 ,img:jewelry7 ,},
    {id:7 ,img:jewelry8 ,},
    {id:8 ,img:jewelry9 ,},
    {id:9 ,img:jewelry10,},
    {id:10,img:jewelry11,},
    {id:11,img:jewelry12,},
    {id:12,img:jewelry13,},
    {id:13,img:jewelry14,},
    {id:14,img:jewelry15,},
    {id:15,img:jewelry16,},
    {id:16,img:jewelry17,},
    {id:17,img:jewelry18,},
    {id:18,img:jewelry19,},
    {id:19,img:jewelry20,},]
    const image=[Alter]
  const [portrait, setPortrait] = useState([]);
  const [figures, setFigures] = useState([]);
  const [abstracts, setAbstracts] = useState([]);
  const [jewellarys, setJewellarys] = useState([]);
  const [color, setColor] = useState(false);
  const [alter,setAlter]=useState([])
  useEffect(() => {
    const fetchItems = () => {
      setPortrait(portraitArray);
      setFigures(figure)
      setAbstracts(abstract)
      setJewellarys(jewelry)
      setAlter(image)
    };
    fetchItems();
  }, []);
  return (
    <ContextProvide.Provider value={[portrait, setPortrait,color, setColor,figures, setFigures,abstracts, setAbstracts,jewellarys, setJewellarys,alter,setAlter]}>
      {props.children}
    </ContextProvide.Provider>
  );
}
