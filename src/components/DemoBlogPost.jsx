import React from "react";
import { RiShareLine } from "react-icons/ri";

import { RWebShare } from "react-web-share";
import { Link } from "react-router-dom";

function DemoBlogPost() {

  const loadData =[
    {
      id:1,
      image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/0696/production/_129168610_55b2a91edfd757c568064b107c814cf5dc02d2080_218_5500_30955500x3095.jpg.webp",
      title:"NFT: Plans for Royal Mint produced token dropped",
      desc:`Plans for a government backed non-fungible token (NFT) produced by the Royal Mint have been dropped, the Treasury has announced.

      Rishi Sunak ordered the creation of a "NFT for Britain" that could be traded online, while chancellor in April 2022.
      
      NFTs are assets in the digital world that can be bought and sold, but which have no physical form of their own.
      
      The Royal Mint announced it was "not proceeding with the launch" following a consultation with the Treasury.
      
      Economic Secretary Andrew Griffiths said the department would keep the proposal "under review".
      
          What are NFTs and why are some worth millions?
          Some cryptocurrencies to be regulated in UK
      
      NFTs have been touted as the digital answer to collectables, but some sceptics fear they could be a bubble waiting to burst. They have been used as speculative assets and some have sold for millions of dollars.
      
      Responding to the announcement, Harriet Baldwin, chair of the Treasury Select Committee, said: "We have not yet seen a lot of evidence that our constituents should be putting their money in these speculative tokens unless they are prepared to lose all their money.
      
      "So perhaps that is why the Royal Mint has made this decision in conjunction with the Treasury."
      
      NFTs are unique units of digital data that use the same "blockchain" technology behind cryptocurrencies - such as Bitcoin. The records cannot be forged because the blockchain ledger is maintained by thousands of computers around the world.
      
      The digital tokens, which emerged in 2014, can be thought of as certificates of ownership for virtual or physical assets, and can be bought using traditional currency or cryptocurrency.
      
      The Treasury is working to regulate some cryptocurrencies and had planned to enter the NFT market as part of a wider bid to make the UK a hub for digital payment companies.
      
      In April 2022, the then-chancellor Mr Sunak said: "We want to see the [cryptocurrency] businesses of tomorrow - and the jobs they create - here in the UK, and by regulating effectively we can give them the confidence they need to think and invest long-term."
      
      Among the best-known NFTs are a series known as the "Bored Ape Yacht Club", which give the bearer ownership over a unique picture of a cartoon ape. Prices of the NFTs plummeted last year after crypto exchange FTX went bankrupt.`
    },
    {
      id:2,
      image:"https://www.aljazeera.com/wp-content/uploads/2023/03/2023-02-10T100016Z_1839105654_RC2K7Z9N32QS_RTRMADP_3_CHATGPT-AI-CHINA.jpg?resize=770%2C513&quality=80",
      title:"Musk, other tech experts urge halt to further AI developments",
      desc:`Billionaire businessman Elon Musk and a range of tech leaders called on Wednesday for a pause in the development of powerful artificial intelligence (AI) systems to allow time to make sure they are safe.

      An open letter, signed by more than 1,000 people so far including Musk and Apple co-founder Steve Wozniak, was in response to San Francisco startup OpenAI’s recent release of GPT-4, a more advanced successor to its widely-used AI chatbot ChatGPT that helped spark a race among tech giants Microsoft and Google to unveil similar applications.`
    },
    {
      id:3,
      image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/153B1/production/_129216968_gettyimages-1248435542-594x594.jpg.webp",
      title:"Google: India tribunal upholds $160m fine on company",
      desc:`The National Company Law Appellate Tribunal (NCLAT) said the Competition Commission of India (CCI) findings were correct and Google was liable to pay the fine.

      But it set aside four of 10 antitrust directives imposed on the firm.
      
      More than 95% of Indian smartphones use the Android system.
      
      In October, the CCI accused Google of exploiting its dominant position and imposed the fine for "unfair" business practices.
      
      It also asked Google to make several changes to the Android ecosystem. This included not forcing manufacturers to pre-install the entire suite of Google apps and allowing users to choose their default search engine.
      
      The Android-related inquiry was started in 2019, following complaints by consumers of Android smartphones. The case was similar to the one Google faced in Europe, where regulators imposed a $5bn fine on the company, saying it used its Android operating system to gain unfair advantage in the market.
      
      Google challenged the fine and the directives in India's Supreme Court, saying "no other jurisdiction has ever asked for such far-reaching changes".
      
      It argued that the changes would force the company to alter arrangements with more than 1,100 device manufacturers and thousands of app developers.
      
      The top court, however, refused to block the CCI directives and said that a lower court could continue hearing the appeal.
      
      In January, Google agreed to co-operate with the watchdog and announced a series of changes to its Android system in India.
      
      But the ruling by NCLAT means that the tech giant can stop users from removing its pre-installed apps from their phones.
      
      Google can also continue to impose curbs on users downloading apps without using its app store and is free to block third-party app stores from its Play Store.`
    },
    {
      id:4,
      image:"https://www.cnet.com/a/img/resize/ddf8af1354f8a611a8cca5ef3fc6b695e333d5cd/hub/2023/03/16/e18e316b-4356-45b9-9198-2c0590693c9e/manna-delivery-drone.jpg?auto=webp&fit=crop&height=675&width=1200",
      title:"Drone Deliveries Are Coming to a New Texas Suburb With Manna Expansion",
      desc:`Plans for a government backed non-fungible token (NFT) produced by the Royal Mint have been dropped, the Treasury has announced.

      Rishi Sunak ordered the creation of a "NFT for Britain" that could be traded online, while chancellor in April 2022.
      
      NFTs are assets in the digital world that can be bought and sold, but which have no physical form of their own.
      
      The Royal Mint announced it was "not proceeding with the launch" following a consultation with the Treasury.
      
      Economic Secretary Andrew Griffiths said the department would keep the proposal "under review".
      
          What are NFTs and why are some worth millions?
          Some cryptocurrencies to be regulated in UK
      
      NFTs have been touted as the digital answer to collectables, but some sceptics fear they could be a bubble waiting to burst. They have been used as speculative assets and some have sold for millions of dollars.
      
      Responding to the announcement, Harriet Baldwin, chair of the Treasury Select Committee, said: "We have not yet seen a lot of evidence that our constituents should be putting their money in these speculative tokens unless they are prepared to lose all their money.
      
      "So perhaps that is why the Royal Mint has made this decision in conjunction with the Treasury."
      
      NFTs are unique units of digital data that use the same "blockchain" technology behind cryptocurrencies - such as Bitcoin. The records cannot be forged because the blockchain ledger is maintained by thousands of computers around the world.
      
      The digital tokens, which emerged in 2014, can be thought of as certificates of ownership for virtual or physical assets, and can be bought using traditional currency or cryptocurrency.
      
      The Treasury is working to regulate some cryptocurrencies and had planned to enter the NFT market as part of a wider bid to make the UK a hub for digital payment companies.
      
      In April 2022, the then-chancellor Mr Sunak said: "We want to see the [cryptocurrency] businesses of tomorrow - and the jobs they create - here in the UK, and by regulating effectively we can give them the confidence they need to think and invest long-term."
      
      Among the best-known NFTs are a series known as the "Bored Ape Yacht Club", which give the bearer ownership over a unique picture of a cartoon ape. Prices of the NFTs plummeted last year after crypto exchange FTX went bankrupt.`
    },
    {
      id:5,
      image:"https://www.cnet.com/a/img/resize/4e6ea51dc1b8b19590da296475a027cd9937fa1f/hub/2022/08/24/26896c8a-94a9-486f-81e8-d3e379b2aeac/fortnite.jpg?auto=webp&fit=crop&height=675&width=1200",
      title:"FTC Finalizes $245 Fine Against Epic Games to Refund Fortnite Players",
      desc:`The Federal Trade Commission finalized an order Tuesday requiring Fortnite developer Epic Games to pay $245 million in fines for using "dark patterns" to trick players into making unwanted or unauthorized charges.   

      Fortnite employed "counterintuitive, inconsistent, and confusing button configuration" that duped players into making unwanted charges with the press of a single button, according to an FTC press release. Furthermore, there was no purchase authorization process, enabling minors -- a large demographic of the popular battle royale game -- to rack up charges without parental consent.
      
      The FTC order is part of a larger agreement between the commission and Epic Games from December 2022. According to a press release from Epic Games, the video game developer accepted the agreement in efforts "to be at the forefront of consumer protection and provide the best experience for our players." 
      
      Since the agreement, Epic Games has taken measures to prevent unwanted charges, such as greater clarity when it comes to saving payment information and a "hold-to-purchase mechanic" to verify the user's intent to buy. 
      
      The company also updated its chargeback policy to account for non-fraudulent charge disputes. Previously, a chargeback would automatically disable the user's account as a fraud-prevention measure. Now, Epic Games only restricts account access when signs of fraud are present.
      
      Epic Games has eight days from the day the order was finalized to pay the fine in full. The FTC will distribute the funds to affected users at its discretion, though there is currently no timeframe for when users can expect a refund, according to an FTC spokesperson.
      
      Players who suspect they have been wrongfully charged for Fortnite purchases can visit FTC.gov/Fortnite for more information on the refund process. `
    },
    {
      id:6,
      image:"https://www.cnet.com/a/img/resize/2cabc98658a13ba1bc686bc01cccbeaa1dc0f824/hub/2021/07/07/e330f468-5fec-473b-a530-c04aa6f00b01/mint-mobile-phone-wireless-service-2021-cnet-review-10.jpg?auto=webp&fit=crop&height=675&width=1200",
      title:"T-Mobile Is Buying Mint Mobile in Potential $1.35B Deal",
      desc:`T-Mobile is boosting its prepaid offerings. The nation's second-largest wireless carrier announced on Wednesday that it has reached a deal to acquire Ka'ena Corporation, the parent company of prepaid wireless brands Mint Mobile and Ultra Mobile, as well as wireless wholesaler Plum. 

      The deal, which could be worth "up to a maximum of $1.35 billion in a combination of 39% cash and 61% stock" according to a press release, will see T-Mobile bring the brands, which already run on its network, more directly into its operations. The actual sales price will be "based upon Ka'ena's performance during certain periods before and after the closing," the carrier also said in a press release.
      
      Ryan Reynolds, Mint's part owner and face of the wireless carrier, who frequently stars in its advertising, will also remain involved in a "creative role on behalf of Mint," according to the T-Mobile press release. The Deadpool actor owns about one-fourth of Mint, and co-founder David Glickman tells CNET that Reynolds is staying with the company for "multiple years." 
      
      Reynolds announced the deal in a video with T-Mobile CEO Mike Sievert that was posted online on Wednesday morning. `
    }
  ]

  localStorage.setItem('demoPost',JSON.stringify(loadData))

  const sliceData = (data, start, end) => {
    const newData11 = data.slice(start, end);
    return newData11;
  };



  // Trucate text fuction starts here
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  // Truncate text function ends here

  return (
    <>
{
loadData.length === 0 ? <p className="font-semibold text-zinc-900 tracking-wider text-center text-2xl">Go to the Dashboard and create your first blog post</p>:
( 

<>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2 md:p-4">
  {sliceData(loadData, 0, 2).map((items) => {
    return (
      <div
        key={items.id}
        className="overflow-hidden bg-white   rounded"
        style={{
          boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
        }}
      >
        <Link className="w-[47%]" to={`/DemoBlogDetails/${items.id}`}>
          <div
            className=" h-[200px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${items.image}")` }}
          ></div>
        </Link>
        <div className="flex flex-col justify-between text-left p-2 text-[0.9rem]  lg:text-[1rem] tracking-wider  uppercase">
          <p>{truncateText(items.title, 69)}</p>

          <div className="w-full flex justify-end mb-2">
          <RWebShare
             data={{
              title: `${items.title}`,
              url: `http://localhost:3000/BlogDetailPage/${items.id}`,
            
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 cursor-pointer hover:bg-gray-100">
              {" "}
              <RiShareLine size={18} className="text-blue-400" />
            </div>
      
           </RWebShare >
          </div>
        </div>
      </div>
    );
  })}
</div>

<div className="grid gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4  md:p-4">
  {sliceData(loadData, 2, 6).map((items) => {
    return (
      <div
        className="overflow-hidden  bg-white   rounded "
        key={items.id}
        style={{
          boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
        }}
      >
        <Link to={`/DemoBlogDetails/${items.id}`}>
          <div
            className="w-[100%] h-[200px] bg-cover bg-center bg-no-repeat mb-2"
            style={{ backgroundImage: `url("${items.image}")` }}
          ></div>
        </Link>
        <div className="flex flex-col justify-between  h-[180px] p-2 md:p-4 tracking-wider  uppercase text-[0.9rem] lg:text-[1rem] md:text-[0.8rem] ">
          <p className="mb-4">{truncateText(items.title, 69)}</p>

          <div className="flex justify-end mb-2">
          <div className="w-full flex justify-end mb-2">
          <RWebShare
             data={{
              title: `${items.title}`,
              url: `http://localhost:3000/DemoBlogDetails/${items.id}`,
            
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 cursor-pointer hover:bg-gray-100">
              {" "}
              <RiShareLine size={18} className="text-blue-400" />
            </div>
      
           </RWebShare >
          </div>
          </div>
        </div>
      </div>
    );
  })}

  
</div>
</>
)
}
  
    </>
  );
}

export default DemoBlogPost;
