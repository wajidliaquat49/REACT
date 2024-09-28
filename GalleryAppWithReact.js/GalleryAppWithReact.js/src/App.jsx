import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Cards from "./cards";

function App() {
  const galleryImages = [
    {
      image:
        "https://media.istockphoto.com/id/1319688417/photo/volcanic-eruption-in-iceland.webp?b=1&s=612x612&w=0&k=20&c=IsI23ZuJtoTMp0DOkDlTGYCR_UtTIgxuXWqnggvPs6w=",
      picName: "Volcano",
      key: 1,
    },
    {
      image:
        "https://media.istockphoto.com/id/872242750/photo/ocena-view-along-the-wild-pacific-trail.jpg?s=1024x1024&w=is&k=20&c=a9LdR34tdKl9ElnDYYNWamPKYncDRQykM0aI91y_29s=",
      picName: "Pacific Ocean",
      key: 2,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvoO_2xcWTXNVuxNl4D2hTf99YGCs7D74Yg&s",
      picName: "Sunset Beach",
      key: 3,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvUABVtG0tNknpTr5aFNmLX5apjafemsWIg&s",
      picName: "Sukkur Barrage",
      key: 4,
    },
    {
      image:
        "https://media.istockphoto.com/id/2154167230/photo/beautiful-background-image-of-the-coast-of-a-tropical-island-turning-into-the-endless-expanse.webp?b=1&s=612x612&w=0&k=20&c=5zW4RmyCvNHGSGx5FfWRrj6-DxlEfebxdNW8SaYs1x8=",
      picName: "Beach",
      key: 5,
    },

    {
      image:
        "https://media.istockphoto.com/id/2152193820/photo/fire-png-burning-flame-isolated-on-a-black-background.webp?b=1&s=612x612&w=0&k=20&c=xDAeAkEAU_a5tlDPDx74eUspDht477zDIFEjaz0tYAk=",
      picName: "Fire",
      key: 6,
    },
    {
      image:
        "https://media.istockphoto.com/id/1731812898/photo/aerial-panorama-of-grindelwald-mountain-village-bernese-oberland-switzerland.webp?b=1&s=612x612&w=0&k=20&c=4OwhLMgb6veVZ3SSyofBnICjDD_MQtc_XiOM54CSYLk=",
      picName: "Alps Mountains",
      key: 7,
    },
    {
      image:
        "https://media.istockphoto.com/id/1557875324/photo/wheat-grain-in-a-hand-after-good-harvest-of-successful-farmer.webp?b=1&s=612x612&w=0&k=20&c=q-rO1sJ_w83QBJejMseFRIAUJAfQkn2cOiOMjQipWzU=",
      picName: "Wheat",
      key: 8,
    },
    {
      image:
        "https://media.istockphoto.com/id/671580298/photo/picking-uncooked-rice-in-a-small-burlap-sack.webp?b=1&s=612x612&w=0&k=20&c=jwv9h85SW4h7gC0mQLNGZhPS5K70MgwPRxLwEHosyc4=",
      picName: "Rice",
      key: 9,
    },
    {
      image:
        "https://media.istockphoto.com/id/157312532/photo/white-ripe-cotton-crop-plants-rows-field-ready-for-harvest.webp?b=1&s=612x612&w=0&k=20&c=Z9YDFeuaeSJxbaMJu3Se10NGWFJwbJ3W2rR4e4_ayNI=",
      picName: "Cotton",
      key: 10,
    },

    {
      image:
        "https://media.istockphoto.com/id/1212918540/photo/cuban-field-farmer-on-the-sugarcane-field-during-the-harvest-in-santa-clara-cuba-serie-cuba.webp?b=1&s=612x612&w=0&k=20&c=0ICrNs0CG9v8wX9GWen3eOEbBXV7DvZIxksCPD3xb4g=",
      picName: "SugarCane",
      key: 11,
    },
    {
      image:
        "https://media.istockphoto.com/id/2056049643/photo/corn-plants-on-the-field.webp?b=1&s=612x612&w=0&k=20&c=crXymmqlP7DJJf2vP3rXwgSNaIEahP0pB--YkmfAdrU=",
      picName: "Maize",
      key: 12,
    },
    {
      image:
        "https://media.istockphoto.com/id/154135061/photo/bananas-in-various-stages-of-ripeness-growing-on-a-tree.webp?b=1&s=612x612&w=0&k=20&c=MGb1ooj_g4LXFNNAajwNIAUuFLR7SZi2l0m7PDmWv6s=",
      picName: "Bananas",
      key: 13,
    },
    {
      image:
        "https://media.istockphoto.com/id/856526672/photo/ripe-grapes-in-fall-autumn-harvest.webp?b=1&s=612x612&w=0&k=20&c=Ogsb_oN10tle1EDvQkkhH4Ej58fTwFeb3ayiEDDKjAo=",
      picName: "Grapes",
      key: 14,
    },
    {
      image:
        "https://media.istockphoto.com/id/454369237/photo/orange-on-plant.webp?b=1&s=612x612&w=0&k=20&c=nwY6ySNVcEtvqfP4jk7tCQ2s8Ez2jdt8elx7bYdSkcU=",
      picName: "Oranges",
      key: 15,
    },

    {
      image:
        "https://plus.unsplash.com/premium_photo-1670596899123-c4c67735d77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fHww",
      picName: "Winter",
      key: 16,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681255760839-6581e2eb3e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D",
      picName: "Summer",
      key: 17,
    },
    {
      image:
        "https://media.istockphoto.com/id/1667301829/photo/womans-legs-in-boots-in-autumn-foliage-leaf-fall.webp?b=1&s=612x612&w=0&k=20&c=z28mw7NWXokxKNn7t3SmfvEZbGrFFnheus_PNCqxQ-U=",
      picName: "Autumn",
      key: 18,
    },
    {
      image:
        "https://images.unsplash.com/photo-1552065033-64247bdddccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwcmluZ3MlMjBzZWFzb258ZW58MHx8MHx8fDA%3D",
      picName: "Spring",
      key: 19,
    },
    {
      image:
        "https://media.istockphoto.com/id/1461681027/photo/rain-over-the-green-forest-carpathian-foggy-mountain-hills-rainy-day-in-summer.webp?b=1&s=612x612&w=0&k=20&c=iIdllsfGEPrXV6LfZwGitnql4gMH15FuHfIFj3wZQCs=",
      picName: "Raining",
      key: 20,
    },
    {
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUXFhUVFRUVFRYVFRYWFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mICUtLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLy0tKy0rLS0tLS0tLS0tLS0tLS0rLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBgMFAAIHAQj/xABDEAABAwIEBAMFBgQEBAcBAAABAAIDBBEFEiExBkFRYSJxgRMjMpGxB0JSocHRFDNichUk4fAlgpKyNGNzo7PC8Rb/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QALxEAAgIBAwIEBAYDAQAAAAAAAAECEQMSITEEQRMiMlFhgaHBBRRCkdHwI3GxFf/aAAwDAQACEQMRAD8Ac/ssqc1Jk/A9zfnZ3/2VrjDLPPklT7IqnxTx/wBrh+YP6Jxx1uoPZMXqE/pF5+6kjUcm6kiVsiJmrZeNXoVFnrUv8VDRp7phCoeKW3aEnL6RuL1HO8Xddz3dAk+PE3MJbYEEpsxZ1mvPU2SPWNs5DhSa3G5pOLTR0TCpPACmKCuytSvw87NE3yVxURnLfkFhmvNR1sbuKZ5PUyPN+Q5KfCqomUWYQUNgchmuIy3TQ3OqacNwKbMCcqLQ+KKeSKXJdYvVOZGx4B0tfy5qesxBopXPJ+6fooa6YBvsZB4iNO6SeJcQLnNpmnQWLv2THJxkZdKcPmMzm/8ADD3jJ+a5zgcfvR5rqdRB/wAPLf8Ayz9FzXhuP3o81sxek5mT1Fhx2bQq64Fb7oKi+0F3uwO4THwU33TfJO7Cv1Mva4aIbCG+/Z6/RF12yGwf+e3yKjCHmHZbrSLYLdJGmFVk/wASs3Ksf8RRRKkbMCHcPGimBDgeNEAwxgQk/wASOaEFIPEqRbJoRot2DVeRDRSQjVRlolDF4pQFiGwji/2Z1oZW5SfjY5vqLOH0K6bjDr2PmuGYXWeyqIpOjxfyOh/Irspqg9gITa3EJ7UVcp1UkSHmdqpoHKmEgpq2C0aVuEIR6FV4/HditAh8Rjuw+SXNWg4Omce4hFgPNJ+IDVOnF8RbbTS6TKw3IAQ4RmZjhwe73YCa3t0tySrwkz3fkmmGS+h3WHN62dXBtjRTQYG32pLXll+YNkyYbT1zbtbU3H3bgE+qhZS5imLA8Ms4G97Io5G3RMmOCVkE8D4Yva1Ehkktq42HoBySpw7AZ5XSu5nTyvorX7SsVtlgafE7fyRfBlKBGNOiua+pm17V7DZXMtSuH9B+i5pwxH7wFdUrW+5cP6SuccPRWlI6LdDZUc6fNld9oTtGD+ofVNnBw901J32gO8cY/qCdeEf5YTuwleplxXbKDBx79vkURWjRRYMPfDyP6KMIdI9gtlqzZbBJGnjzoq3mVYTHRV7UUQWStUEXxFEDZQU/xFWUHDZAn4ijnbIEbqIthUY0W8AWrNltCVTLQQsWLEJZ8uzteOS63w3V54Gn+kJGliaRsmDhaqszL00Tk7M+mi2qJPEiKdyqZ5vEj6R6phos2FSgoeMoqOIlCEeArybYrZjdSF69oJy9QhYSEjGaWCWKRr3AEXt1XMYcOGY6310XTMc4cs4k3IJ/3dBRYPG3ksTzadjo4+nUqlYBw7SFrdVaywHcImmjCNjjBWZyt2bkklRX0pcCvMT4rdTNJa25srD2CTuMrBpRY95IDK/I2UdLiMlVO6aU3JOg5AdAuu8JN92FxXhx1iV2jhV/uWlasqqSOXjbcBsqLFhHZKWHYJI15dprsrbEaohhsUVg7y6IEm5TscrYmUdjnfG2AVLpI3CIuaDqW6/kmjhlhawAggjkdCmyKUOGoXtVRg+JuhWixOmiorDotcEHvvQ/osrCpcBHvPT9VGQbW7LZeNXqUNIao+FBMRdYdEK1EuAWSclFSDUqZ2y0ogrK7hcg0QDN0fNsgY1SLYU3ZYwr3kvGBQsIusWuVYhLOBX0WuDVmV5Cy+ip/bZZU2IiQ4Onu5XeG3NgEpU09yE38N6m/QKpBRGOlgAHfmtmNyusdivIXeHN6qVp9oy4VBnkjLOBWtRFqCt75mdx+ikdqy6hAaupw9tilzF8Ce0Zo9RzH7Jomb4VtFqz0SsmKM+R2LNLG9jnkQePuoymLuYTPLhbXC40KEZhruQWCWCaOnDqcckVD3pN4ooi86Loxwt5PwoWThkyHXSyqEJqVpBTyYnFps41T0To32PMrrnDYIgYOyN//k4chDm3d15oajhMTcp2H0WjJq2swR07qIXUvN7HmrbBmZW25KpEoJCucKddpHQo8PIrJwEU/wARHqj4HICIeO6ObYFaUIZT41HZ3mtcB/men6orHBoChMFNpPRH2BG9uy9UbH6LbMlDAatOyhatqp1yo2lGuAWTP+Fa0KyQ+FZh6nYncKqT4UDEi6w6ISJRcEfIY4aLeILSTZSx7IQjZYsWKiHzw2TRL+IyWeCrKjlu0Klxc+JOjyZsj8pf4bPeyfuGH6O8lzDCJtAuk8Im7XIcgeJ2MsEl2EdQiqJ2Ww5Wsgg3wiyLnHgzDp9ECHMmi0e5vXUKSiOhaeRIQTZ7+zk9CigbSHvqiBJwzSyHoza4RjUI5tnnuoyIkiGpCyDQkKS19VGD4u6hCRjvEvSfEopDYhbzu0UIRyjxKlxKnvcBXr9rpXxuoq3PtSxAxj4pPCSXA6tY0nlbexSc3pNPTY3OdJpfFukVFZiwgLG2zkfE2/Lz5FN3D8jXtzsN2u1HbqD3XOTQe0LpBfMSS6+1yddOSsuFuIWU0ro5bta74hvldycOoP7LFhzJT34/4eg6r8Jvp14e848/H+9hi4k4gNO72cbQXkXudmjYaczuk5mI1Pt21BkeX6Zbk2Oti221jtZWvHTmunjew3GQBzh8IzXcwX2uRmNug7hW+GUcToaVzyB7N8kl/wChpc437XAPopmc55HFPjj6B9EsPTdLHI4W5Wn78N/tt9y9x2dkcWeVwYNNSefQdUHgk7HkSRuzNOlx/quf45jjqyQyH4A4tib0btfzO5/0UnDGOGmksdWk6jktH5upVWxj/wDBfgam/P7dv9HY2v0UUlTZZQTsljD2G4P5ditpqRa009zgSjKLp8g4kvqtwVG1tlsAiAN536LahfYIapvZb0x0VUS9wmsmuFDC5RVLlox6tIjZZySbKeN4VKaheiqtzVaS9ReZlio/8Q7rxVoZetHBnwGJxaduSosZd4lcTYkJjmCo8YOqOPIiVUE4RIup8FO8BPdchwuTVdY4Gf7p3mqyhYeaGqkfq5p66LehkN5Iz6eqGA95fqERGLvJ52SkaGbwNs3KeX7oyo+Jp7WQDpCfEeqNnPhafJWmUwmCXxAdV5iMgZZx8lWYjWGLK619bb25LX/FoJiA82I2B2+aVPMlt3GwxN79izpqppIF7E8uamqY7EEISCCMatDfMIm6kcjrck8cb8ppiMzGtzONrev0VFUcZUQOUzAnsCbeaYFW4jglNMPeRNJ62s4eRCkpy7DMUMSf+S/kRVHFVGA28ws7YgFw06kDRKvDvFTKcmAubJHnNpAT4bm5NrEkHf1KD4u4VjponTRSG1wMj7c/wncpOpXhwJA3+dxyWeWSd2+x3+j6HpZ4mo21L3917f6sd+NJWwA1MLo8soOaNji7xE2Eo8Iy9+q5z/HkuFzfWwudr90zxva4C+jLaDe46m/NKGO0BjOZpLmnYgfUDZBicZyafJsyeL0mFOLtL9xipMayMnheMwc6Nwdf4XROtcdbtJHyRtZj9qYQtcc77tf/AEx3uGeu5/1Sfhknhc+T/m6kfum+TBaZ40D2O/EHkk+YOnyUyKMWrG4cniR1qPNS+32AW1DWta0HbmSB9UVTwuk/lgP8nN/dV9dw49t3RyNe0a5T4XW+hQFJOWkFpsRqCNCEGhSVxZqhmd1VHVeAKh9M9zXxyl8xaxjBbJpclznX0I7DYFdRk2XH+FOJ2kw53H22YN0B8QuL3toLgn5Lr0x0Wrpm9NPseU/G4Vn1tc/bb+CvsvQ1bALZg1Ws4lHlVH4fRe0kWikrB4VLSt8Kq9i63K6tj1UTIroysGq1p26or2BrcClpiCh5adx2V5MzUKSOIKaiaRSNO8LE0vgF1ivWVoPmjDMGmt8Nl7XcNTvOgXSo7DYBSgjouQ/xKfZGtdJGjlx4Zlibncdk8fZ9JeN49VeQ07ZDldsrOnw5kY8At5LRh6qWSPmAlhUJXE8f90qaoJADhvdaW8I7FEVPw/JaQSOtksL233Uk9W1sTS4+XdR158BPZJWKYg4gBxtbZLyTcOB2HEsjpjLXV0czbEloBvcHVVtLQxvdla95J1uS0WHU6JMqOJ2M8IBc7oNvmtaXiiRrgWMAO1r3vflZZHCcncjoJ44LSmO1RUyUkjGOfma++Rw01G7SOqvKPGwfiXOqnEJah8ZlbkawlwNjqSLanomCndtZBJuD2KlBSW45vxCNrS8yNa0C5LiAB53VJU8ZU4+DPJ/Y2w+biEp8bykUo10MjL/Jx+oCT6Crc57GBxGZzW3/ALiB+qbGUpRtGnpekwSWrI2MHF+MCc5/YSggWBdIco8mgEJPpcQLHHM02Ovry15art1HT0rAG+yb/cRnPmS7VHsooHizMtugA+iqM1Vclz6xQpYrSXvuv78z5/GJSXJzAgm9hoB5LSaWR4+8fIErvU/DETvuAeWiDfwfHy0TNdfpFPq5OOlzdHC6jM2IMsRd3jvytqAfU39FfjHulgugVv2fNe7MJOxa5uZpHoQfzWrfs1preJgvztcfLVSUoyW6DxdY8Lbg09kt/h/bEX/HT2XtFX53tEsMbgTYva0hw72B1TjP9k0J1ie5p6OGdv6EfMqkqODKumkbqAL3a8G7Tbz+hHzVOMErR0en67x5U2k/ZP8AlHsVHLFIHUwD7G4a4gON/wAIJF/RddxPE5m0Aky5JQxheAc2UXGcg9h+qVuH8efGWQ1Aifmc1mZjBG4XIaCbaO1I5BM+MPa9hY64bsQCRftcK8daW0zm/ieTI8sIzjst13tfQAwziXwjM6/mLn5hFy8REata0jrcrnsGGTfxIggIyOOmYkhg89TZHYtTVVK0GVmjjlaWEOBO9uo9bKo5MmkzSw4JS259h/oMa9t4XANPK23kmCHZciwvEXDKL6jchdHwLFxI0NcdeR69j3TsWXVs+TJn6fQ7XAXVbralGq8qN1JTDVaexk7m8o1CkjC1eNVuEIRE/der1268UKOTtcpQ9BRyqXMvONHRCoJrOV9C+4SxG/UJipXaLTgdULmrJgPCfNS1JOQqI/CVvMfAfJdhGQyqF4/T9EqyxRFpbILjtumq/ux5JDqopMz8oLtTos/ULg19LVs2p8JoQbmO51sXEu/JSPq4YnARxMb0dYJclrKkGzaWU27AD5koOSnxCXQsbE3uQSkaG+X9TbrUXsn+x0fDsWhLNcpd97Nv5a8rKkw5w9rMxpuxrvDbax5Aqrp+CKnJnMwzWzBrr+LS9t9Lo7hyQFgIFuRHQjQockUkUpXZHxx/4U9pGH6j9Ugwvs5rhuHAjzBuugcbD/KO/uZ/3Bc9YdR5j6p2D0Dsb8p2KKKRwu1pP08rlRNcQ6xDmOGuuh8x1HkrGgqPCGjposr2+0jIFvaNN2n9L9Dss2jy2KRNSYs9mjjmHff5q5pcVhcQC7KToAdr9L7JMpajO2/zB5HmCjKeMONnC4OhHZXjyyi6E5MSY7lrea1MrRyCoqKtdG4QSuuD/Kedzb7jjzcBseY8lYPK3KafBicGuQl9ZZJv2m15bTxkGx9sB6GOS6Y53JG+1ST3EI6yE/Jh/dC5XsauiVZ4v4iXhdY51TBck++i/wDkauw189wuK8PC9XT/APqsP/S4O/Rdaq5dEqfl2Ru6+Wua+ARw5GHTZuxTFiNEyaN0Tx4Tz5gjZw7hL3C8jW5idv3TA2pa42a7XyKfgcdFM5OaM9eqPY5jW0klLKYnDXcEahwOgN/Q6FW+HYgW21XvGkrZJGhpBcwEE8jry621QFDH1LfW6zSq/KdKPmgnNbsesPxT2gtm8Q77ouPEXNOyV8LlDXDxNPkCfzumQtDgHLbgyalTOT1GLTK48BsGLgnxaK2ieHC4Su/KEdgVX8TSdBqE1oQmXDt1io58YOY5W3F9DdYq0l6jm7KWTopo4H9EwGwGwWRkdFh/IR9x/wCYfsULKGTMCmKmYQ1btbdbv00TY9JBAPNJmPPhK2mPgOvJQ20cTt0UVbVsZH4umya9iJWbPqWtizE8knvxFwLnDn+S3xHFDI0NAsAqeaRZMk9bo6ODFojb5DxxDbRxt1voh6rEi5pkbq3n+zep8kPJ/DSgCVouBa6lo/4eEjIwvsfh3uOyHSvYcpP3MpOIqmR3szdrgLjMMpI691c4bTZG25kkk9yblDVQdK+OSRmSxswffA79uysnxuYLnVvUfqFMsJPdCVkjdFVxiP8AKSebD/7jVzgldI4ncHUktvwg/JwK5sRoj6f0miD2OtCV2RljYEC/XYaX/wB7KypnC1gqmdpEItuGtRWCS3WUuPBWiX2dS+M7OAkb66Ot6i/qr2lPib5oDjOjytjqB9x4Dv7X6fXKiKCS+QjsrlGmmLbtDBiFEJosh05hw3a4ahwPUFC4ViLiTDNpK21+kjdhI3t1HI+iPY/RV+N0+ZoczSVmsbtrHmD1adiFpvuY/gw6qdskL7U5PdwD+t//AGhNUOJNkYHHwuHhew7teNx37dRZc9+0jEWufHEL3ZmcbjTxgZbfIqRdyHYPLNMpuExesh83H5McU/zV5DzG7fcdHN6+Y2P+qQeDh/mb/hjcfnYfqmfEmZrG9i3UHof2Q5fVQ+b1SsuqTEcgIvzC3OKg/eIPY2StBV3dryIBHQlWM7OXrp2SnEfjpRIKms8e+nJFQ1Cqqxg1015L2kn0CNRpAzdjPTVRte/52TDg2Kj4XbeZSMycIyjqrHdGm47oyTgpbMZuIqh0Nje7XfCf081lFPZly7Urd3s6mD2ch21a78Lhsf8AfVL1RE+J2Q3021uCOoPMLZHJZzZ43FjB/FDqsVE2fRYjsWHRTOedNkUJmsG+qBq5nN+EadVDh7DIbn1VkLqge5xzHQKaoqGO8N9Qq6uxAMGRqqGSlQhfYnKIoS7NY8kkVmIuebkojiTEXENYdkvmVY81uVHS6aKUbDnSoaWZQumQ7noIwHymTON1d4WMoaepVFStzFXebRtuqcomWcy6rNcp7qzqW+7PkFXTDweoVnvGf7UaRnbAa7DmzQObsXMLbjuOY5rmWI4NPAMz2ZmD77dW+vNvr811+ib7v5qCihBaRyur0oZjzygCwyBzR0I+oQlFdr8vQ/8A4q2pqpIZpGtAcxpFmDQtGUaN/PRGYZXsldmbcbZgRYg9CudLG4tnQxSv5jvBkljMUgu1zS0jsUs09HJTyCF+tvhdyc3k791b4fNqFdTQsmZZ241a7mD27I0tca7gS8j+DAY5NFFLLdR1kb4rB2o5Hkf9UDLVgak2CjbWzE0b1AG+nVIv+B/xtRNIZcjM2VlgHE5QBfU6C91fYxi7XMLGG5PPkBz1XO8MxqaGRz23MbnE5eW+4PJMhjnTaDhmhGVMcqHhOakMkjSJmlthlFn73PhO+w2JS/UcRFzzG1jr3scwsR6HVNuDcUsfYm4v159QOqIxOignaJC0Zx8LxYOsD15jsptdyQ2Sb9LFmjpiSTfVw37jUXVtFVeFrjryPn081YQUrS2w3FrFVjqcgTC2zr+tg4Jbdj47HtTG06HTnsqoNykg6dxq0q8dEbDQ3Nt0OcLfe7ND+Hkf2Ui6I6AA9v4h81NHNryKLkpJPweaDnon+X5I00xMkXlJiNhZWlLirHDJIMzdbfiBO5B/TZJ9OSN0Qx/M/sotnsKlFNbjl/h0fKVtuV2m/rZYlX+OcOaxM8WQjwIFrS1TPhJ0PJFPGUWYbXVJSM1zO5LdteCcrtuXZbDnm8rH+ajY437ryoc9uoN2rKaqB+IW7qiAPFEXga4ct0smZNtWM9xe4KTMTpXxONx4eR5JU4W7NWLLSo9M68E10GCUfQ0D36gaBRRCeRh9IbC48kwCn92D3CHpsNtHf1Vvk916D8ldUKlKwiUe79ArCmN4/wDlVfFrF6fRG4Y67B6hRFNhWGjweqygb8Q7rzCzoR3W1KbPcP8Ae6OgShxSBragu/ENR3Gl/kq+t92c7eZ1srriMDKXdHDXzFvqQl2V+ZpF9wsWaNTOn00rxoNocXOl02UWI3AsfNc2oH23OxsmbDqrayTJaXsP9SOgAtmbldqLa/pboVyriLCqinmc2V5kY43idsMv4SBoHBPeH1ljurPEKKOoiLJBcHUHm08iD1WrFNPd8mDNBpUuDiVfI5x9i2+vxkcgfu+v080bDhjch7f7srJ+BvppiyUXubtkGzunkeylr7Nc23MXICJzcpUhscccWPURQ0jPZCIgFoFvXr2N9bqslkmpdC4ujOz/AMPKzu6tWziy9dUAixFwdwdQUxxvkxwyuLtMkwzFASNdMvz1FlY0uV7Hf1OJPcXsPyASw/DrODovDrfKdR6HkpYamdjR7t1mjcWP5BZ54X2N2PqotbjPTyNytvv+qkkIzAjdJ0mK3uXHKSNjoRbYi6glxlxaRn1HPt1S/CY1ZojuZhzKFqKljhpqlkYy4jUgqCmxDxX5ee6vw2U5otJxlPh2XoOmqiilDjqskdY6K6BbIzN1WKWzTrZYiFljPP4AOqrnE32U09XYgWvZRtqC7lotxyiSOV9rWuF7UMNgBooqnFMujQF7NVZ2a+E8lRLNMtuav8PomPiLZW3B6hKuCxOfOA47LoczsrALdlUkXB9xQfwZHnux5y726Kxo4GsdkAsALFWj5DHawzXW8rA5oIFiUuhmoDigFnNHdaUzbsI8wjGUZjF73JWsNOWAuPNFRVgtE67C3pcIjCZNLd1JSwAAuJ31UVG0DM7/AH1UolhuGu1d5ryKX3jlDQNJLiNip8NpSXOJRlWaSwtlL43C7XAg/LcdwkTEqWSmeY5DcfdeNnD9D2XRvaNY5xshMVwltVEc2l9Wkbg9UE4ahuLM4M5i6azlc0FTl5qgxalkgkLJNxseTh1CIiqxlWWcDfiypjrhleTqmbC8QuFzSlqToB6pvwiUnYpG8XY6SUkNGK0jZoiLXIGnfsuXVL/EQTqDl+Rsuo0D+RKpcd4SimLnx+CQm/8AS49xy8wteNq7ZgyqWnShIbKERE8LSSiMbix7SHDQgr0NWgyBkTwVtm6IaMAKUyhVRLPXwtcRnaHW2uAUHWRR7ezZ/wBIUzpCg6iccyiSBbK6rp47GzQ09W6f6Kphns7ITp1VjW1jAClqrkubq3jTRUc0oS2Gl1Rp4Spoqm411SxR1zgNduqKFRzBKzPHRvjnTVoY869VKKvzXqHSw9aLiY+L1RE3w+i9WLYcsrI/iC8xdxFrLFivuD2J+F3H+IbqulT7L1YgnyMx8ANR/Maopj4wsWIQg6Y6tUOMHw+q8WKyEE/8v0CmpAPZehXixWUFYaPAfX6Imm+ArFihYP8Add5LKBxy79VixQoSPtLAyMPPMRfnsUownwrFiXkNOAsaA6J0wAnTyWLFiyHRh6RwpkUFixHDgRLkUOPBZ8RG5a6562ItdKxceqxYtcPSYMvqZ4XHqtS49VixMQpg8zz1KBn3CxYiQDBpgFTV+6xYiA7ksA9yfP8ARR0x0KxYlzHY+QgOK8WLEA8//9k=",
      picName: "Gift for you",
      key: 21,
    },
  ];

  function pop(data) {
    //  alert("runn")

    const popshow = document.getElementById("popshow");
    popshow.style.display = "block";
    const imgshow = document.getElementById("imgshow");
    imgshow.src = data.image;

    let cards_ID = document.getElementById("cards_ID");
    cards_ID.style.backgroundColor = "rgb(1,1,1,1)";
  }

  function Remove() {
    let popshow = document.getElementById("popshow");
    popshow.style.display = "none";

    let cards_ID = document.getElementById("cards_ID");
    cards_ID.style.backgroundColor = "white";
  }

  return (
    <>
      {/* Header */}

      <div className="header">
        <h1>...Gallery App...</h1>
      </div>

      <div
        className="cards_container flex flex-wrap justify-center gap-5"
        id="cards_ID"
      >
        {galleryImages.map((data) => (
          <Cards
            key={data.key}
            image={data.image}
            picName={data.picName}
            onPress={(event) => pop(data)}
          />
        ))}
      </div>

      {/* <div id="mainLargeParent"> */}
      <div className="box" id="popshow">
        <i className="fa-regular fa-circle-xmark" onClick={() => Remove()}></i>
        <img src="" alt="" id="imgshow" />
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
