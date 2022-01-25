import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="md:ml-40">
        <div className=" w-full bg-hero bg-auto">
          <div className="text-3xl md:text-5xl flex text-uppercase text-red-500 font-bold justify-center -ml-5 p-5">
            Om oss
          </div>
        </div>
        <div className="w-full max-w-7xl text-sm md:text-xl font-light flex flex-col text-black my-5 justify-left px-5">
          Grundat 1960 av Mikael Doe, vårat företags dedikering till service på
          snabb tid och kvalitetsförsäkring har fått Mälarö El att växa till ett
          av de största elektriker företagen i västerort. Idag är företaget ägt
          utav fyra individer vid namn Mats Doe, Johanna Doe, Karin Doe och
          Fritjoff Doe.
          <br></br>
          <br></br>
          Varje medlem i teamet arbetar med passion för att försäkra er alla om
          att ni får den kvalitetsservice vi är kända och stolta över. Idag är
          företaget ägt utav fyra individer vid namn Mats Doe, Johanna Doe,
          Karin Doe och Fritjoff Doe. Varje medlem i teamet arbetar med passion
          för att försäkra er alla om att ni får den kvalitetsservice vi är
          kända och stolta över.
          <br></br>
          <br></br>
          Vårat mål som företag är att förse alla våra klienter med en snabb
          service för alla elektriska behov. Genom att utföra alla typer av
          arbeten, kommersiella, arbeten i hemmet, säkerhet, och så vidare. Vill
          du veta mer får du gärna fortsätta läsa mer om våra olika tjänster
          nedan.
          <div className="w-full my-3 text-2xl justify-left font-semibold">
            Arbeten i hemmet
          </div>
          <div className="w-full ext-sm md:text-xl font-light flex text-black my-5 justify-left ">
            Tack vare vårat otroligt organiserade team så kan vi följa våra
            klienters schema och arbeta för att inte förlänga projekten. Vårat
            team för hemarbeten kan ta hand om allt från att lägga nya
            elinstallationer till att fixa och uppehålla det som krävs.
            <br></br>
            <br></br>
            Vi har full förståelse för att det kan kännas jobbigt att behöva
            släppa in en okänd människa i ert hem, vi kan försäkra er om att
            alla våra medarbetare har märkda kläder samt fordon för att vara
            lätt igenkänneliga.
          </div>
          <div className="w-full my-5  text-2xl font-semibold">Säkerhet</div>
          Sit ea deserunt velit ex sunt deserunt duis veniam cillum magna.
          Laborum eu officia elit laborum ut ex eu est. Non aliquip voluptate
          magna nostrud enim dolor magna laboris eiusmod amet veniam.
          <br></br>
          <br></br>
          Veniam magna mollit cillum culpa culpa fugiat deserunt. Aliquip fugiat
          pariatur mollit fugiat duis exercitation proident cillum ad labore
          cillum. Et ipsum incididunt est ut do aliqua et in. Consequat occaecat
          exercitation cupidatat ex ut.
          <br></br>
          <br></br>
          Quis adipisicing adipisicing exercitation ipsum in et dolore aliquip
          non in dolore nulla laboris consequat. Cupidatat sint sunt sit officia
          adipisicing nulla. Tempor consequat et dolore irure non. Id commodo
          aliqua officia sunt nostrud anim reprehenderit consequat ea dolore
          enim veniam commodo. Nisi non irure nisi ea elit tempor exercitation
          ea aute nulla dolor tempor eu sit. Pariatur esse occaecat ex fugiat
          occaecat adipisicing deserunt dolore. Anim dolor mollit do dolor dolor
          ea nisi proident minim in.
        </div>{" "}
      </div>
    );
  }
}

export default About;
