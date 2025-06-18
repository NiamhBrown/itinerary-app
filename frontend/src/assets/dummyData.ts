import type { ItineraryResponse } from "../features/tripForm/types";

export const dummyItinerary: ItineraryResponse = {
  enrichedItinerary: [
    {
      day: "Day 1",
      morning: [
        {
          title: "Art Exploration",
          name: "Dover Museum",
          description:
            "Discover art and history with exhibits showcasing Dover's past and cultural heritage.",
          location: "Dover, Kent",
          googleAddress: "Market Sq, Dover CT16 1PH, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNTFpdY21mvIXqNCiUqf6D65VmdFJKWBTpYMQix8NUUkZkRiGE1wao7VC1Q1TJ2o0iRHjQMnKnw_dHeqiwheuzAaY8jleP43f9AKIx_WX1sB9NcvHI93EiBdvtdk-qNQtq60MZNVjH1ES70UtxhAGeay53ptkQ8O1AnVs5XY-uirHhATCEnF51k_HOLNi-mZzFhGdcMOPO4rberxwZDncU_vF0H73KrN3ntbQ0l5j-8ddJ7kGNJ_jUnfgkTNVFTFfI9wEBC5eJRcuq-XMIuoH_rjzxhJF_L44bdP19Azcecp8o6DhC6aTH6mnct1E-7MoeiYqiRP9w3cw7fiU_-D3YGBkHRHVIxnKYJNDNvzimKprp9fGn-8CINgTrkp1JlHqATkdcPoHG9814NNhSTfa1FDmquWaaG1JLInmCP-4UsZM1dLrL1285aUw4-mKNqnG85xriQTIByWzpHesFNRNybG_SjTZdj4dN20pn5NbaROc082AyKCUK-FK03W86k4wJ_JRttG3LK5CkN2tWilRLV_lRULCDK9FoLbvi12K4Uya8riUgOU7QYzSgidsw5oFGzYE2lwqHb2_mVYzDH-osB3NV68IoDTdgPFhYpNWid8ID0CypKTbeYm3KMrPzeOGyrW_A&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJD2h-piy73kcRnY9ymPM_QCA",
          url: "https://maps.google.com/?cid=2323927723190423453",
          website: "http://www.dovermuseum.co.uk/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Market%20Sq%2C%20Dover%20CT16%201PH%2C%20UK",
        },
      ],
      afternoon: [
        {
          title: "Café Culture",
          name: "The Coffee Cabin",
          description:
            "Relax with fresh coffee and pastries in this charming, local café.",
          location: "Dover, Kent",
          googleAddress: "Canterbury Rd, Lyminge, Folkestone CT18 8HU, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNSS3xUYmc9dMFCZ94Gb_gjr4LAXFxqdj0hQEje5rKOCN-VCH2XOdW1hgY8Q2RckfHNf7ui6ZcVWvGX0gWSb2FJ_kH4-Ng91G7Ry-vSUjU3B2UU28T3dPkJLGAO_UCgHsC8pP3SCNLm46uEJaDvdWaaqR56V175XsStJ5u3iPR0-95eSjf7NVM18yeRFE-5iUTDIB2o8k3A2CiH3QSe2Rr6mOYbNaX1jjZKUZplJ52eYfx4xaCQJfOfji94f3ujY5cSLj--x63c4L3mpONUFUmf39jfF1W0nP2f5zEAZ2fQbpsYkWdpZGbLu_D0jIEpS1Q_rNbI1QF0&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJPau94AjH3kcRNk9he3n4hIc",
          url: "https://maps.google.com/?cid=9765203092690784054",
          website: null,
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Canterbury%20Rd%2C%20Lyminge%2C%20Folkestone%20CT18%208HU%2C%20UK",
        },
      ],
      evening: [],
    },
    {
      day: "Day 2",
      morning: [
        {
          title: "Castle Views",
          name: "Dover Castle",
          description:
            "Explore the historic Dover Castle and enjoy stunning views of the White Cliffs.",
          location: "Castle Hill, Dover, Kent",
          googleAddress: "Castle Hill Rd., Dover CT16 1HU, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNQYmIv6UmLuZ4aqhQox4kiaB2gfIqIGXfIm8dC_xjZo9Vy-5rDem2xUBSB_TeuLkvQquM7V8rb-OMYAmqzVSzV0WNbrPJPmZU-A9LlaVIxgvSWAQkf_v7VDX4l0S-QosWWp9anTCVTMA5YgN283tsvcn-yI3OeBuAXA0Idj5UKpJF7mTdZ_hSjNA9ZX9rH57wD9h-tJW2cUalyCDPybSHJwJs0BZ67G8H-b3kSPYUA0qhqoUrmhvaqn62PnT_reclFr36XvLuvJz_FtkoXsw652ZuxWPmFDC9jt5z-UGiUnm43oertP9CLMJl2CZwTApgL2M41bA7TbAi5HwAwot6qL26C3LFPARoZdnJv5JEJ5yEULrQ7bQBhqLrkX176zBoA3QzlDbDYxDi4m8A8V3PsAeCj1lyYjkxtZ_qIuq0d4w5jUZo-UJebe9mJtWxwwW5ZQcGWrCaFxZnKjtN2yBz_4AiTbe7sTvHcQDGeo2Niox-O3SqSJYSGUvGsc3cK3wZt_TGog3zmdCYG9EtjJfgDB21RE947O7wvaxGAQryTUIKRqx7vrEW6ff3BAo7TyVkQLes6GEQnr7ohDDfQuZEGvJ563JLmo02ZFWXrb0OoQDb-apRHaPW769BmboPIZ9t7RHOhX&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJv1aGJNak3kcRLIqDsOlwctM",
          url: "https://maps.google.com/?cid=15236364638338910764",
          website:
            "https://www.english-heritage.org.uk/visit/places/dover-castle/?utm_source=Google%20Business&utm_campaign=Local%20Listings&utm_medium=Google%20Business%20Profiles&utm_content=dover%20castle",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Castle%20Hill%20Rd.%2C%20Dover%20CT16%201HU%2C%20UK",
        },
      ],
      afternoon: [
        {
          title: "Artistic Treasures",
          name: "Turner Contemporary",
          description:
            "Visit this stunning gallery in Margate dedicated to contemporary art.",
          location: "Rendezvous, Margate, Kent",
          googleAddress: "Rendezvous, Margate CT9 1HG, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNTltOK3yWiXDD2TqeZFEV3gNotkquZ_f76lODZJplgyTObuBdR_Zh0EW9PTWrGDHpjtLfoK5ng4FTP3HDBeGEKU4VHwM1d2kvVfks13RGvCiumaD1GIi3yX_c8FaEfcpqZmWiBqn5S8Dn-1h_F9iWs2VKFvswkDR1nYXHzoVTPEQWG4CfiOMqoZJeE75aHNFp6vLl0yn22FqtEwjyKW6Yvv33W_t8PcopGi-XqnxgkVoLxKAEX_V5jDJAEu6T5GvesM_bh4XgXNSDPMfV-rod_OynecWofKd6CQPnpMoXsnxEO5bgakNYRc6tbwSNA8RcX2UbN4i7zSCpfNL8aXr25AkyfP0ZpNIqD0nrHf5SIJaT2hxSoH7FT9BFeWo6_kW9FLwgIsIhAZJ5vti9O-CZwyVFd5iH-zTX8ly8xvOBllfNErzEqlc9dXt7aW9-cGjD3YTle8p9AecWU1FHvZ3I3nDg5v2_xDq2tTvisIRKkqyvaSfJqb_q6eFpSvvHe_gggjZmKdkL9AJhI2KpbQCBP-F8z63hgTXJOWjvDZ1j5covYNC5t0u4VvcgL9uilkiepqtDNbgbXSQQu5onnkCW4nmWM7I8_suQ5CsddKwMQXFb3fZSfTgkNBIivJsCrpZiWeow&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJ43BzH65T2UcRi1aMNct541M",
          url: "https://maps.google.com/?cid=6044809038545049227",
          website: "http://www.turnercontemporary.org/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Rendezvous%2C%20Margate%20CT9%201HG%2C%20UK",
        },
      ],
      evening: [
        {
          title: "Dinner with a View",
          name: "The Buoy and Oyster",
          description:
            "Enjoy locally sourced seafood while overlooking the sea.",
          location: "The Parade, Whitstable, Kent",
          googleAddress: "The Harbour Garden, Whitstable CT5 1AB, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNQ5NkRoK48wQnFsUZegqZ8vfjpeux0rVRT5ZWnQDEMrjFFiB9SYb_Z5DtZmwGSK3dM4WIE7DbmPSCf4LU_Ykz_hVN_zYiFwaN5txIYVly3DI8AJjSK38VOW2GigSgyH3mOgE9n5DaXT9Bi3vy__7zhzhbZFDx4PxaiqFsfR9fU4hSp1NELNM-jeXPkRbY-aGYZ1DhVX4o1rFvcqrmkmqcosUgGE4hubSqrfNLiM_ssEcI3PqZPSXnU_3UO10iNAenrlreJPl_A88Rn6CGJaBJJudBJhfgOBsgvVdeRxzQIcuikpeGW6lbnhyRlrzDjCpe-Az5z9ZYAB5t6Nvv8NCmlN3rSGzzNUcrnpvm0B8UgTiRwbOS92Xb00Y2q-hu_bLgEN2dgNYRa_709Nrz_TI4FgHm7DjPvvvH_nHRwAmXA-3i6_w_yMsB037LKtW6PjLszZxKnmExWEJtY9X6SacNx-t7h66FchijcXvF17SxAkjaIa_sGRn1Xtpy5R6uaiwvAKqGSOGkqydTeH70_vd0ixZy0P0mCapgtlyAD-Vg3mW4D5A-9bl2uZlqWgLnqHc9DobHTqOVsCQRLUb9MjTLSnM9eMC31GUmkBo6JYwQXs-a5Gjjm7lHECJLLm4pUd7tJZUg&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJZYb8AJkz2UcROV_5dQYsV7g",
          url: "https://maps.google.com/?cid=13283134032213270329",
          website: "http://www.burgerbuoys.com/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=The%20Harbour%20Garden%2C%20Whitstable%20CT5%201AB%2C%20UK",
        },
      ],
    },
    {
      day: "Day 3",
      morning: [
        {
          title: "Heritage Railway",
          name: "Kent & East Sussex Railway",
          description:
            "Take a scenic steam train ride through the picturesque Kent countryside.",
          location: "Tenterden, Kent",
          googleAddress:
            "Tenterden Town Station, Station Rd, Tenterden TN30 6HE, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNQfkVwEI2LHVFrmIk7gAkgZ10X5dsVmZE1V93ELdVaTadW9sEserdPKHvl0jMqaGaQfiBKQYyeN0AJahBfS1iGwdqOas-fpG2LE49nwZTCOtdk6bVUsuPPB0FaI45rvlvDY1FfNcbNG4mhpewAruqLLsc6onnq8g-F44bGSdhFDQaWi39pSxmDhWCwMd1VKH9gYSYz3VAzB_ESm-mJ_fLLLtTsLyFsRc-4YyB5ZFH6Ji4p11XgnteX7MspMq2CJi4liHzz4cctwrNU3Mrzvvp1ll5p4DYq86BK5-hcux3jFxdnVevlZ12GZRbvuoJwqwDGj-PtfZ74&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJ57x_cxch30cRyQBLKXtKhY0",
          url: "https://maps.google.com/?cid=10197638824084570313",
          website: "https://kesr.org.uk/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Tenterden%20Town%20Station%2C%20Station%20Rd%2C%20Tenterden%20TN30%206HE%2C%20UK",
        },
      ],
      afternoon: [
        {
          title: "Cultural Café Stop",
          name: "The Old Dairy",
          description:
            "A quaint café perfect for lunch with homemade cakes and light meals.",
          location: "Tenterden, Kent",
          googleAddress: "Unit 2 Station Rd, Tenterden TN30 6HE, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNRWYezFvx3rur9Rv_lW16vuOhsz9_v0bruC4u1X_p6P-QT3nodgB9HLtrXhH-v71DOIuqtmqU-ImJM00n2WfjTLf6PT2JgUNczqBkUlQszOaqeFmEpy76lNJSLRWzFHjb-uGZOyypHZx2W2QJ3E4Aa0ldigA4EudEjZuLakrtZbzZEYOhriIWIJxAQeudihImlNCdTVHqq2b8ncAyjpqMQVGie0JMKMoq77hvyILkcCw6fmtDS4S692QlqLLVMKhpWxr3joKQU9s0yLG5HOoSOJ3CWe525u5xXjxGzKONH2tqm_CQcd5oPZv8jjUzSRk4fvnXBfYVY&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJ8aJY77kj30cRLwAoGa_EVlo",
          url: "https://maps.google.com/?cid=6509606567731003439",
          website: "https://olddairytaproom.com/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Unit%202%20Station%20Rd%2C%20Tenterden%20TN30%206HE%2C%20UK",
        },
      ],
      evening: [],
    },
    {
      day: "Day 4",
      morning: [
        {
          title: "Architectural Marvels",
          name: "Church of St. Mary the Virgin",
          description:
            "Visit this beautiful medieval church known for its stunning architecture.",
          location: "Church Lane, Ashford, Kent",
          googleAddress: "Churchyard, Ashford TN23 1QG, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNS_-S6RZlZwWzJ3AnaqZtjKdYocfmzBH2IaOvYoPFtFM8bZ5fpaR96w7OoREVCItduUPboaokNiLaZoKK8E660i9LZX1TABoLoLTR0iQgEQwn9wAjxcX3jsDDiBiXkFzPZrb9rG8V0656o6q5MbIdy4AggU4NI4xa14sWC5nVR8bzTl0ioIZ4BnaDydUHKQNnKJzsoeAuGI-tg9wHx9jcV_DoyWUlY55WIzwbE28vUyECs5ERfZ3Zy1p-Z5Tqv3KfrInYyj5DKLxqggTMzX_l_kkMZ_-AZDNhbHGWM3SEEto-3AWvmS2syQxWLe8XCNs3YVwRv1OtF58ta65zudxdGgc5lMtcfddkSpoU9YB5QdcjiMOh1WGWLkg9qYaaU2ROr-B3_ucadNkrHqzeOH8gyBqoHIuClCoK3qc8Y9jeDnb9vGLv0wl621Sy0Ll93udPuVrTyx1MWfrZhZaSJTlIpJ5vpmAsB-QPTICTsvBDYWEEAxIDy5IhUt7nS6FP2OE0KEjaIhjYuidAfuU_hBZDbI42j5re6AIKm71lmjP3kOM9pgbL1I26fhxieXj2ElgADIrK_lco4qXn6nexCX9bPCGP8Zjqh-wRMirBMExgB6fUGZBqvQ9xGiXEfrH48c&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJ-xTHRETa3kcRjIDSXdTTyh8",
          url: "https://maps.google.com/?cid=2290876269531922572",
          website: "https://www.ashfordtownparish.co.uk/ashfordtowncentre",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Churchyard%2C%20Ashford%20TN23%201QG%2C%20UK",
        },
      ],
      afternoon: [
        {
          title: "Art in the Park",
          name: "Howletts Wild Animal Park",
          description:
            "Immerse yourself in nature and see wildlife while appreciating outdoor art installations.",
          location: "The Street, Bekesbourne, Kent",
          googleAddress:
            "Bekesbourne Ln, Bekesbourne, Littlebourne, Canterbury CT4 5EL, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNSq06Fw6MSd0w33YewgtakhHFAnRVuZ20UfsY_IUkroMX0oCHhHl0BdLi_uNAgEA8eBKWlbJE9sWitMT3-tvB306is7lVJZEvyiO0vlOYTdGOtoTOAlhSNPhktSMgVjzHlTnxd0utzk2Omf-B08nDYW4DQadChY4SAAz_kaTzTYgfUfK8OKX-0N_WwwmVAfT3GKN9E_zUXg_wUGCmwAxUWCmzzGVL_GkX-XIS7a5FXQa1ONISoZEoMSjwF75KQr9PmfRhN6ov3IzS3keGL6c-12Jkss9aSTlHhvKVYxHuYJgkGSVFK8HamzyPZeAG5qK45OO6cgGFoSWiBIC0kP2XkXgt7nJOUbdyT2qPitIn4fPU4uBKXLdvGis9oX8EhNl2VAnAACNSu_aIjteQo1gTPTOvIijMkQVs3ILwWAvYeukG5Y6cCXcXzEH1kVhZ5cp7AUN6JSYU2sV9tCLGeB7fnMCRMzEPlEvjYSC0rBscLQx6tUlL-DAEBvkwc2UZJ_MUmd-bMIyql0dMnhMV1S5SAK8xlWwBk2SlY7TjaxTgk6VO-oaNZDtIEBKwi4pH8cmnv2jdr__XeGrpPNEY2zkQkEOswaWocZg999t9Nd1GfmUrAztYGSzGKgVk1e9yQVUBucxg&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJ1XUn5ee13kcRjedthEI1XaU",
          url: "https://maps.google.com/?cid=11915738748898109325",
          website: "http://www.aspinallfoundation.org/howletts",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Bekesbourne%20Ln%2C%20Bekesbourne%2C%20Littlebourne%2C%20Canterbury%20CT4%205EL%2C%20UK",
        },
      ],
      evening: [
        {
          title: "Relax at the Pub",
          name: "The Red Lion",
          description:
            "Unwind at a classic English pub with a rich history and local ales.",
          location: "The Street, Tatsfield, Kent",
          googleAddress: "Castle St, Bletchingley, Redhill RH1 4NU, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNTzhhBEC-SyLLInjpsMVfrKV9px5wIj2VAZQuNxwnbcliJIkAJmFuiiP1xAFxgdqglIro4SFf2HncgeXWYOxlpk7e254UOypUnA5DLLkCePY5BjI6uSCkc5ZTobWAfS5WYM62COWdmdLncW6IITz4jzxwThDyf7Ixlb-J7bnq1Q3am5GRWQPtQO_gbUAwXf7OuLdJyzm67OXup5OksZM8X_fPKklioT61yhctjH_GYc8AN0jqj6TkNhgDbcNj5xl3Ynj0bNCm-jGiE7MbZNZ9cQ9puN-fdaOp7VR2PCN5teYGd287PKEdbquFapaP4M_aAayKaO-UE&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJQ9ElFcL7dUgRAt0ZzDENevY",
          url: "https://maps.google.com/?cid=17760522588017777922",
          website: "http://redlionbletchingley.co.uk/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Castle%20St%2C%20Bletchingley%2C%20Redhill%20RH1%204NU%2C%20UK",
        },
      ],
    },
    {
      day: "Day 5",
      morning: [
        {
          title: "Art in the Gardens",
          name: "Sissinghurst Castle Garden",
          description:
            "Explore the beautiful gardens designed by Vita Sackville-West, full of artful landscaping.",
          location: "Sissinghurst, Cranbrook, Kent",
          googleAddress: "Biddenden Rd, Cranbrook TN17 2AB, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNSEWNZT-MfQ8WCJv9oFklClRwOrK1-2jUcCZGMs_UWWM5_UiQXSebtKXrGRtYNY--xceIbuPjpaT1-YurZD9vK-eHhwIO52AeNaHC1sbcPoEEbinRuIZ3uxExoMb9mrvCxvD9QmN1SBag4dCA0QEJFMfjCApNJoGEARCmct6iIE2FddP6SjOqsl69rMZk8LMuMOGEkHF_aKKtdQsSIRi39ac5BzNx094tvr0vKKUbv7b4YnqDx5BAulF7WAs6IaL1jQfP8K3TK5RjteP00R-6hK2clVNArFnZ6QCr-QCY8bCavh1KgncEaSN2iiI3-EKukqX8VBxhjbsGIY50UN8sGSCYmVqWtgeQuZADysrgZ8reSq5SINxVJ85t-zOdneef28S67Is95h0YoluzxDQGhjE81xqstrOxBtyfgOWkqu3ujUEY7w3jO8j5Oy5ZPj_viEvOSX1XMWttMsMFRTyTsDTGBU_2Hb4ET6V2FYyCZ5yd_jtC-bX6Jpm_uu9kKhtmqKw2ARdK86ZWFYz_QhaA8yOPFpZwqKSB9dd1RHR74_GEPR9fIPB9NM7l-6amUDf28hIHuX4sAn0zHf4jcQTDJSlMxAdRENZH7KABVRCUdFCUSt4EeRZ3qWd_WpeqQGHkceMA9r&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJxxtgn7Mk30cR8GvQS4qb9yI",
          url: "https://maps.google.com/?cid=2519653534816824304",
          website:
            "https://www.nationaltrust.org.uk/sissinghurst-castle-garden",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Biddenden%20Rd%2C%20Cranbrook%20TN17%202AB%2C%20UK",
        },
      ],
      afternoon: [
        {
          title: "Lunch by the Gardens",
          name: "The Benenden Village Shop & Café",
          description:
            "Enjoy a light lunch at this local café with fresh, homemade options.",
          location: "Benenden, Kent",
          googleAddress: "The St, Benenden, Cranbrook TN17 4DB, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNTaIglzW70chR74uj20aoqLaNuqAH_MloQ4YKanpF48CY61gm36z_0FYUIq1dbWfOR0NwmwbbWUV-H0EBOjeZCWFBErXgadrjSxc8r0zWd5oOsRfnEvH6QZXgB3Fc5cNDBVPPnxJjYa7JG7TaU_6qSFi4jBREMb2_HqNRQ3U594R4eRic3HgicIXuDv5_Rvkr4W7CEQpSM22QziHOZmZMDG43dOEvLbVqM0xQCu7X4nTtgFWHROYVaXH6KdzmOeWxT1TIIAOjrRg2ltkXevqnce8jS1giUc15Kksb8NOir1ydmRZRp5RvjnDTV66zcgXVAjupCQ&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJ9WTI0z0j30cRtsiQCl2Z40Y",
          url: "https://maps.google.com/?cid=5108095027256543414",
          website: "http://www.benendens.co.uk/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=The%20St%2C%20Benenden%2C%20Cranbrook%20TN17%204DB%2C%20UK",
        },
      ],
      evening: [],
    },
    {
      day: "Day 6",
      morning: [
        {
          title: "Museum Day",
          name: "Museum of Kent Life",
          description:
            "Learn about Kent's rural heritage through interactive exhibits and displays.",
          location: "Sandling Road, Maidstone, Kent",
          googleAddress: "7GW4+V2, Lock Ln, Maidstone ME14 3AU, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNRnyvaKT_Y13B1PKOeWcJkQ4q63d_u0KJ3GcdcAGbKsxP5OEaee2j9WXhumdUvpgl2lLq7SdMRdCkP8P7Ui0ECwRF2PcwESBZ6vnMx27r6bhe-OcHlC87z0oRjY4aMJxkaqqNkazDfhGAcqDsyWwIPaoJEXpMfczy2MUY4J2juUTYpfy9LAuYiwoev5TDh18QM9V_YakAX-B7UCIB3LquQSIwV-o1LuUiD7Egs39G1M0p79tBkPBMubNVnyJkjxmFjU0J7UuGtaZU-cALlC864Rh5_6FHnaJRzz4AKMBcQD3E4HtzMYPU_Ce8XB1NrevMQ5gnsph-iQf2E8FXX-L0rdqfmo2X4yKnUR0QaK5yd28HiOijs_wFeIQoQwWKTElB-UNwMHotXO0pfXJ8_QWjiQhK0BciYTNPl9KaQdz04zNREaOLO1VHbOk8znD5qC4QHimzG9WEEyNTBn6gNeWMGMagdJU2GRMdyYlXCM4TaQphAJnRnDgmxwyQBCz6ZCNpb76cUdJ2Mluy03pgTIisfKiLwIlBk7_grxmnB46bE3BTuokUgHdSMsyvmHXF2AyCkXR-UqDvx2NCp1yZ4b4AwwjcPJhE7Mj24A22eOZFx7O4ZfkWg_tbg9vnHBt07BhrgTUA&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJERWyka4z30cR6C_8S9wqPOE",
          url: "https://maps.google.com/?cid=16229894282792415208",
          website: "http://www.kentlife.org.uk/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=7GW4%2BV2%2C%20Lock%20Ln%2C%20Maidstone%20ME14%203AU%2C%20UK",
        },
      ],
      afternoon: [],
      evening: [],
    },
    {
      day: "Day 7",
      morning: [
        {
          title: "Charming Village Life",
          name: "Biddenden Vineyards",
          description:
            "Explore picturesque vineyards and sample local wines in this charming village.",
          location: "Tenterden Road, Biddenden, Kent",
          googleAddress: "Gribble Bridge Ln, Biddenden, Ashford TN27 8DF, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNS5Z8e3VFibEpeXFynGcCo1jqYNxgRMgL1VDLqVVzDpQ0rtf3CrtcHo_T4qkAEhTLuc0IGcHt1eFtrRXxbZOk62zDDYuhSxDNEL70UigIWNP6ACovU-XrcWNyaM2wOCHsDCpCDCtS4DEGv2OD6VnzNOza6OLYQK33bHuhzGAVzjf68st0XE7ZWU-Seu8uGoraTiQsNacAkC6h1g1Su4L21ZTd63RSwDdejSu_5_VRpQclBBgpSITmD9NnLuCXRq-CMThdGrr2NvhvyIpwbiHWMzjeomQh_Yy612C6MJo7oHc5j8G79w7pvYM-mhxR-s8QIl8MDixLk&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJi_1gqgAk30cRAf-OKHeRtrg",
          url: "https://maps.google.com/?cid=13309985689707675393",
          website: "http://www.biddendenvineyards.com/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Gribble%20Bridge%20Ln%2C%20Biddenden%2C%20Ashford%20TN27%208DF%2C%20UK",
        },
      ],
      afternoon: [
        {
          title: "Farewell Meal",
          name: "The Vine Inn",
          description:
            "Enjoy a cozy final meal in this traditional pub known for its hearty dishes.",
          location: "Biddenden, Kent",
          googleAddress: "76 High St, Tenterden TN30 6AU, UK",
          photoUrl:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AXQCQNTNfwWIKLENbzWNOM4YmBuINUJ34Csrb8ak43KbinaxgiwfZd8piRXuyMBkGb4wnJRBgpURUd-04jvvUxHQTu9ccPPYPSUtaIbaynD3CgHDyujkFFGwZWzWdQz3BY9_6fyJL__RRtiUof-bKYT06xys14MkwC3AgR8tmTJigAV5Ue8_occSrd-UUDetXgLkOrMM-XQGpKDhNLW4gn48SeMrSPl9jZ6zC4bQCvCdGqP0DTVglGs0brVdZtMK1blF5Gu_JnsQsJ8GSshTJP1iBlRa4vP_kS7BG08i3geoJ7jDhOA2pD1TExuRd5rqyopF17dQeMWAwNY&key=AIzaSyARw514NOU5NcEAoS7nieW2IyUGQWpxni0",
          googlePlaceId: "ChIJT0q4VBch30cR3JeppaqoR9w",
          url: "https://maps.google.com/?cid=15872840862567864284",
          website: "http://www.vineinntenterden.co.uk/",
          googleMapsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=76%20High%20St%2C%20Tenterden%20TN30%206AU%2C%20UK",
        },
      ],
      evening: [],
    },
  ],
};
