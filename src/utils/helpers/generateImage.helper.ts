
import IMAGE_1 from "@products/pexels-ashuphotography-1413420.jpg"
import IMAGE_2 from "@products/pexels-brettjordan-19954891.jpg"
import IMAGE_3 from "@products/pexels-ferarcosn-191877.jpg"
import IMAGE_4 from "@products/pexels-gabby-k-6621449.jpg"
import IMAGE_5 from "@products/pexels-gabriel-freytez-110599-341523.jpg"
import IMAGE_6 from "@products/pexels-hazardos-1306262.jpg"
import IMAGE_7 from "@products/pexels-jill-burrow-6858669.jpg"
import IMAGE_8 from "@products/pexels-karolina-grabowska-4239011.jpg"
import IMAGE_9 from "@products/pexels-kevinbidwell-1352783.jpg"
import IMAGE_10 from "@products/pexels-madebymath-90946.jpg"
import IMAGE_11 from "@products/pexels-mnzoutfits-1639729.jpg"
import IMAGE_12 from "@products/pexels-pluyar-1493112.jpg"
import IMAGE_13 from "@products/pexels-ron-lach-8140917.jpg"
import IMAGE_14 from "@products/pexels-sameerkalani-3802602.jpg"
import IMAGE_15 from "@products/pexels-sarmad-mughal-94606-397978.jpg"
import IMAGE_16 from "@products/pexels-tdcat-2876659.jpg"
import IMAGE_17 from "@products/pexels-zeleboba-19977715.jpg"
import IMAGE_18 from "@products/pexels-zeleboba-20000834.jpg"

export function generateImage(){
    const images = [
        IMAGE_1,
        IMAGE_2,
        IMAGE_3,
        IMAGE_4,
        IMAGE_5,
        IMAGE_6,
        IMAGE_7,
        IMAGE_8,
        IMAGE_9,
        IMAGE_10,
        IMAGE_11,
        IMAGE_12,
        IMAGE_13,
        IMAGE_14,
        IMAGE_15,
        IMAGE_16,
        IMAGE_17,
        IMAGE_18,
    ]
    return images[Math.floor(Math.random() * images.length)]
}