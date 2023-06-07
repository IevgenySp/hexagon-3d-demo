import React from 'react';
import Hexagon3D from 'hexagon-3d-react';
import style from './Main.module.scss';
import WomanImg from "../assets/img/Woman-Transparent-PNG.png";
import DarthVaderImg from "../assets/img/darth-vader_1.png";
import AvatarImg from "../assets/img/Avatar.jpg";
import PiratesImg from "../assets/img/Pirates.jpg";
import FlowerGif from "../assets/gif/ByKq.gif";
import AbstractGif from "../assets/gif/Abstract.gif";
import BearGif from "../assets/gif/Bear.gif";

const Main = () => {
    return (
        <div className={style.mainContainer}>
            <div><span className={style.text}>Hexagon 3D</span></div>
            <div className={style.hexagonsContainer}>
                <div className={style.hexagonContainer}>
                    <Hexagon3D
                        width={100}
                        height={100}
                        growTop={true}
                        sidesColor={'linear-gradient(to top, rgba(255,81,50,1) 0%,rgba(255,246,0,1) 100%)'}
                        topBottomColor={'linear-gradient(to top, rgba(255,81,50,1) 0%,rgba(255,246,0,1) 100%)'}
                        showShadow={true}
                        shadowColor = {'0px 10px 40px 5px #c600ff'}
                    />
                </div>
                <div className={style.hexagonContainer}>
                    <Hexagon3D
                        width={130}
                        height={150}
                        rotateZ={20}
                        rotateX={40}
                        growTop={true}
                        topChildren={<h1><span>Top</span></h1>}
                        side1Children={<h1><span>Side</span><span>1</span></h1>}
                        side2Children={<h1><span>Side</span><span>2</span></h1>}
                        side3Children={<h1><span>Side</span><span>3</span></h1>}
                        side4Children={<h1><span>Side</span><span>4</span></h1>}
                        side5Children={<h1><span>Side</span><span>5</span></h1>}
                        side6Children={<h1><span>Side</span><span>6</span></h1>}
                    />
                </div>
                <div className={style.hexagonContainer}>
                    <Hexagon3D
                        width={180}
                        height={200}
                        rotateX={40}
                        growTop={false}
                        topBottomColor={'linear-gradient(to top, #ad5389, #3c1053)'}
                        sidesColor={'linear-gradient(to right, #000046, #1cb5e0)'}
                        topChildren={<img alt='Woman' src={WomanImg} style={{width: '75px', transform: 'rotateZ(-30deg)'}} />}
                        side1Children={<img alt='Darth Vader' src={DarthVaderImg} style={{width: '100px'}} />}
                        side2Children={<img alt='Avatar' src={AvatarImg} style={{width: '280px'}} />}
                        side6Children={<img alt='Pirates' src={PiratesImg} style={{width: '130px'}} />}
                    />
                </div>
                <div className={style.hexagonContainer}>
                    <Hexagon3D
                        width={220}
                        height={200}
                        rotateX={40}
                        growTop={true}
                        topBottomColor={'linear-gradient(to top, #ad5389, #3c1053)'}
                        sidesColor={'linear-gradient(to right, #000046, #1cb5e0)'}
                        showShadow={true}
                        topChildren={
                            <div style={{height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><iframe
                                width="400"
                                height="350"
                                src="https://www.youtube.com/embed/ipoBgSdAuSc"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                style={{transform: 'rotateZ(-30deg)'}}
                            /></div>
                        }
                        side1Children={<img alt='Flower' src={FlowerGif} style={{width: '150px'}} />}
                        side2Children={<img alt='Abstract' src={AbstractGif} style={{width: '360px'}} />}
                        side6Children={<img alt='Bear' src={BearGif} style={{width: '300px'}} />}
                    />
                </div>
                <div className={style.hexagonContainer}>
                    <Hexagon3D
                        width={120}
                        height={100}
                        rotateX={50}
                        growTop={false}
                        topBottomColor={'linear-gradient(to top, #ad5389, #3c1053)'}
                        sidesColor={'linear-gradient(to right, #000046, #1cb5e0)'}
                        topChildren={
                            <iframe
                                width="300"
                                height="200"
                                src="https://embed.windy.com/embed2.html?lat=47.334&lon=19.874&detailLat=47.334&detailLon=19.874&width=300&height=200&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
                                frameBorder="0"
                            />
                        }
                        side1Children={
                            <iframe
                                src="https://api.wo-cloud.com/content/widget/?geoObjectKey=6112695&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit"
                                name="CW2" scrolling="no" width="70" height="102" frameBorder="0"
                            />
                        }
                        side2Children={
                            <iframe
                                src="https://www.planeflighttracker.com/2014/07/flightradar24.html"
                                frameBorder="1"
                                width="100px"
                                height="122px"
                            />
                        }
                        side6Children={
                            <iframe src="https://fr.euronews.com/embed/timeline" scrolling="no" style={{ width: '80px' }}/>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
