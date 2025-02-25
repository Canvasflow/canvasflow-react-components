import type { Meta, StoryObj } from "@storybook/react";
import Article from "../../../lib/components/article/Article";

const meta = {
    title: "Article",
    component: Article,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        id: {
            table: {
                disable: true
            }
        },
        ArticleID: {
            table: {
                disable: true
            }
        },
        features: {
            table: {
                disable: true
            }
        },
        isSelected: {
            table: {
                disable: true
            }
        },
        components: {
            table: {
                disable: true
            }
        },
    },
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
    args: {
        id: "51054",
        ArticleID: "390697",
        features: [],
        slug: 'masthead',
        index: 0,
        style: `0000`,
        isSelected: true,
        components: [
            {
                "colstyle": "none",
                "background": "none",
                "styles": [],
                "gradientangle": 180,
                "imagepositiontop": 50,
                "horizontalpadding": 0,
                "align": "center",
                "expandfullwidth": "off",
                "animation": {
                    "type": "none"
                },
                "bleed": "off",
                "width": 100,
                "columns": [
                    [
                        {
                            "fullwidth": "off",
                            "onlyShowCaptionInLightbox": false,
                            "lightbox": "off",
                            "imageframestyle": "none",
                            "aspectratio": "free",
                            "align": "left",
                            "expandfullwidth": "off",
                            "onlyShowCreditInLightbox": false,
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "bleed": "off",
                            "caption": {
                                "en": ""
                            },
                            "role": "image",
                            "width": 300,
                            "credit": "",
                            "linktype": "none",
                            "alt": "",
                            "rawimage": "off",
                            "externallinktarget": "on",
                            "unselectable": "off",
                            "imagefilter": "none",
                            "imageclip": "none",
                            "overflow": "off",
                            "hpadding": 0,
                            "imagelink": "",
                            "captionposition": "below",
                            "imageurl": "https://cdn.pwa.canvasflow.io/4157/articles/390697/images/0907f512-c047-416b-b2ed-1f7285fbfccc.png",
                            "templateId": 390697,
                            "language": "en",
                            "captionenabled": "off",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "fixedwidth": "on",
                            "pagelink": "none",
                            "tag": "",
                            "creditenabled": "off",
                            "htmlclass": "",
                            "id": "Comp-1470086",
                            "articleid": 390697,
                            "imgunselectable": "off",
                            "title": "",
                            "component": "image",
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><a href=\"https://scubadiving.com/\">scubadiving.com</a> ∂ <a href=\"mailto:edit@padi.com\" target=\"_blank\">edit@padi.com</a></p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><a href=\"https://scubadiving.com/\">scubadiving.com</a> ∂ <a href=\"mailto:edit@padi.com\" target=\"_blank\">edit@padi.com</a></p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Sidebar body NS",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-2236688",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text4",
                            "imagewidth": 250
                        },
                        {
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "bleed": "off",
                            "id": "Comp-3279562",
                            "margin": "margin-50",
                            "component": "spacer"
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><b><font color=\"#298cb0\"><u>EDITORIAL</u></font></b></p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><b><font color=\"#298cb0\"><u>EDITORIAL</u></font></b></p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph NS",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-9623567",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "body",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n \n <p><span style=\"font-family: Geogrotesque-Bd;\">Content Director</span><br>Candice Landau</p>\n \n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n \n <p><span style=\"font-family: Geogrotesque-Bd;\">Content Director</span><br>Candice Landau</p>\n \n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-7813594",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Managing Editor</span><br>Dave Carriere</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Managing Editor</span><br>Dave Carriere</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-7428773",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">ScubaLab Director</span><br>Robby Myers</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">ScubaLab Director</span><br>Robby Myers</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-4547358",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n \n \n <p><span style=\"font-family: Geogrotesque-Bd;\">Senior Editor</span><br>Joshua Pramis</p>\n \n \n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n \n \n <p><span style=\"font-family: Geogrotesque-Bd;\">Senior Editor</span><br>Joshua Pramis</p>\n \n \n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-6832733",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n \n \n <p><span style=\"font-family: Geogrotesque-Bd;\">Senior Editor<br></span>Ariella Simke</p>\n \n \n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n \n \n <p><span style=\"font-family: Geogrotesque-Bd;\">Senior Editor<br></span>Ariella Simke</p>\n \n \n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-9996792",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Digital Content Manager</span><br>Kristin Paterakis</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Digital Content Manager</span><br>Kristin Paterakis</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-6015572",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><b><font color=\"#298cb0\"><u>CONTRIBUTORS</u></font></b></p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><b><font color=\"#298cb0\"><u>CONTRIBUTORS</u></font></b></p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph NS",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-9625529",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "body",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n \n <p>Brandon Cole</p><p>Annie Crawley</p><p>Grant Dong<br>Eric Douglas<br>Katie Doyle<br>Brent Durand</p><p>Alexandra Gillespie</p><p>Travis Marshall</p><p>Brooke Morton<br>Alex Mustard<br>Sage Ono<br>Alexandra Owens<br>Francesca Page<br>Chantae Reden</p><p>Terry Ward<br>Patrick Webster<br>Andy Zunz</p> \n \n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n \n <p>Brandon Cole</p><p>Annie Crawley</p><p>Grant Dong<br>Eric Douglas<br>Katie Doyle<br>Brent Durand</p><p>Alexandra Gillespie</p><p>Travis Marshall</p><p>Brooke Morton<br>Alex Mustard<br>Sage Ono<br>Alexandra Owens<br>Francesca Page<br>Chantae Reden</p><p>Terry Ward<br>Patrick Webster<br>Andy Zunz</p> \n \n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-9539519",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><b><font color=\"#4297b7\"><u>ART TEAM</u></font></b></p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><b><font color=\"#4297b7\"><u>ART TEAM</u></font></b></p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph NS",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-2542865",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "body",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Senior Art Director<br></span>Monica Medina</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Senior Art Director<br></span>Monica Medina</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-2234223",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Graphic Designer<br></span>Toni Shelley</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Graphic Designer<br></span>Toni Shelley</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-1777308",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        }
                    ],
                    [
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n \n \n <p><b><font color=\"#4297b7\"><u>PADI WORLDWIDE</u></font></b></p>\n \n \n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n \n \n <p><b><font color=\"#4297b7\"><u>PADI WORLDWIDE</u></font></b></p>\n \n \n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph NS",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-9254958",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "body",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n \n \n <p><span style=\"font-family: Geogrotesque-Bd;\">President &amp; CEO<br></span>Dr. Drew Richardson</p>\n \n \n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n \n \n <p><span style=\"font-family: Geogrotesque-Bd;\">President &amp; CEO<br></span>Dr. Drew Richardson</p>\n \n \n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-4646448",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Chief Brand and Membership Officer<br></span>Kristin Valette-Wirth M.B.A.</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Chief Brand and Membership Officer<br></span>Kristin Valette-Wirth M.B.A.</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-4616076",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><font face=\"Geogrotesque-Bd\">Vice President, Growth &amp; Marketing</font></p><p>Lisa Nicklin</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><font face=\"Geogrotesque-Bd\">Vice President, Growth &amp; Marketing</font></p><p>Lisa Nicklin</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-1273463",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Senior Director, Global Membership &amp; Publishing</span><br>Theresa Kaplan</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Senior Director, Global Membership &amp; Publishing</span><br>Theresa Kaplan</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-9078153",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Education &amp; Content Development Executive</span><br>Karl Shreeves</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Education &amp; Content Development Executive</span><br>Karl Shreeves</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-5554038",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">General Manager, PADI Travel<br></span>Manuel Kraemer</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">General Manager, PADI Travel<br></span>Manuel Kraemer</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-3805497",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><b><font color=\"#4297b7\"><u>PADI MEDIA</u></font></b></p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><b><font color=\"#4297b7\"><u>PADI MEDIA</u></font></b></p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph NS",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-5794546",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "body",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n \n \n <p><span style=\"font-family: Geogrotesque-Bd;\">Director, Marketing &amp; Operations</span><br>Kelly Williams</p>\n \n \n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n \n \n <p><span style=\"font-family: Geogrotesque-Bd;\">Director, Marketing &amp; Operations</span><br>Kelly Williams</p>\n \n \n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-5363092",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Marketing Manager<br></span>Nushaw Ghofranian</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Marketing Manager<br></span>Nushaw Ghofranian</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-1322811",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "<p><span style=\"font-family: Geogrotesque-Bd;\">Marketing Campaign Manager<br></span>Ashley Briody</p>"
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "<p><span style=\"font-family: Geogrotesque-Bd;\">Marketing Campaign Manager<br></span>Ashley Briody</p>",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-9866503",
                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Marketing Campaign Manager<br></span>Eba Diab</p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Marketing Campaign Manager<br></span>Eba Diab</p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-6066175",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Director</span><br>David Benz<br>850-261-1355<br><a href=\"mailto:david.benz@padi.com\">david.benz@padi.com</a></p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Director</span><br>David Benz<br>850-261-1355<br><a href=\"mailto:david.benz@padi.com\">david.benz@padi.com</a></p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-5801468",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Director</span><br>Jeff Mondle<br>760-419-5898<br><a href=\"mailto:jeff.mondle@padi.com\">jeff.mondle@padi.com</a></p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Director</span><br>Jeff Mondle<br>760-419-5898<br><a href=\"mailto:jeff.mondle@padi.com\">jeff.mondle@padi.com</a></p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-6573233",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        },
                        {
                            "expandfullwidth": "off",
                            "animation": {
                                "type": "none",
                                "params": {
                                    "speed": "medium",
                                    "delay": "1",
                                    "repeat": "0"
                                }
                            },
                            "IMAGECAPTION": "",
                            "bleed": "off",
                            "dropcap": "off",
                            "linktype": "none",
                            "imagefloat": "left",
                            "externallinktarget": "off",
                            "imageenabled": "off",
                            "imagelink": "",
                            "text_lang": {
                                "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Territory Manager</span><br>Linda Sue Dingel<br>407-913-4945<br><a href=\"mailto:lindasue@divemarketingmedia.com\">lindasue@divemarketingmedia.com</a></p>\n "
                            },
                            "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                            "language": "en",
                            "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">Territory Manager</span><br>Linda Sue Dingel<br>407-913-4945<br><a href=\"mailto:lindasue@divemarketingmedia.com\">lindasue@divemarketingmedia.com</a></p>\n ",
                            "cacheparam": 1,
                            "devices": {
                                "tablet": "on",
                                "desktop": "on",
                                "phone": "on"
                            },
                            "channels": {
                                "applenews": {
                                    "image": {
                                        "enabled": "on"
                                    }
                                }
                            },
                            "pagelink": "nones",
                            "tag": "",
                            "displayname": "Paragraph 20pt",
                            "excludedchannels": [],
                            "htmlclass": "",
                            "id": "Comp-6726820",

                            "articleid": "390697",
                            "unit": {
                                "imagewidth": "px"
                            },
                            "component": "text2",
                            "imagewidth": 250
                        }
                    ]
                ],
                "gutter": 30,
                "imageopacity": 50,
                "devices": {
                    "tablet": "on",
                    "desktop": "on",
                    "phone": "on"
                },
                "contentmode": "default",
                "backgroundimage": "off",

                "id": "Col-5484088",

                "columnorder": "default",
                "video": {
                    "autoloop": true,
                    "poster": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                    "url": " "
                },
                "colsplit": "50-50",
                "component": "columns",
                "imagepositionleft": 50,

            },
            {
                "expandfullwidth": "off",
                "style": {
                    "unit": {},
                    "margin_bottom": ""
                },
                "animation": {
                    "type": "none",
                    "params": {
                        "speed": "medium",
                        "delay": "1",
                        "repeat": "0"
                    }
                },
                "IMAGECAPTION": "",
                "bleed": "off",
                "dropcap": "off",
                "linktype": "none",
                "imagefloat": "left",
                "externallinktarget": "off",
                "imageenabled": "off",
                "imagelink": "",
                "text_lang": {
                    "en": "\n \n \n \n \n \n <p>All contents copyright 2024 PADI. Reproduction and distribution of the materials contained herein without express written permission is prohibited. For inquiries, please contact us at PADI Worldwide, 30151 Tomas, Rancho Santa Margarita, CA 92688-2125</p><p><br></p><p>Printed in the USA</p><p><span style=\"font-family: Geogrotesque-Lt;\"><br></span></p><p><span style=\"font-family: Geogrotesque-Lt;\">Retail single copy sales: ProCirc Retail Solutions Group, Tony DiBisceglie</span></p>\n \n \n \n \n \n "
                },
                "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                "language": "en",
                "text": "\n \n \n \n \n \n <p>All contents copyright 2024 PADI. Reproduction and distribution of the materials contained herein without express written permission is prohibited. For inquiries, please contact us at PADI Worldwide, 30151 Tomas, Rancho Santa Margarita, CA 92688-2125</p><p><br></p><p>Printed in the USA</p><p><span style=\"font-family: Geogrotesque-Lt;\"><br></span></p><p><span style=\"font-family: Geogrotesque-Lt;\">Retail single copy sales: ProCirc Retail Solutions Group, Tony DiBisceglie</span></p>\n \n \n \n \n \n ",
                "cacheparam": 1,
                "devices": {
                    "tablet": "on",
                    "desktop": "on",
                    "phone": "on"
                },
                "channels": {
                    "applenews": {
                        "image": {
                            "enabled": "on"
                        }
                    }
                },
                "pagelink": "nones",
                "tag": "",
                "displayname": "Footer",
                "excludedchannels": [],
                "htmlclass": "",
                "id": "Cf2-108331616",

                "articleid": "390697",
                "unit": {
                    "imagewidth": "px"
                },
                "component": "footer",
                "imagewidth": 250,
                "PublicationID": 4157
            },
            {
                "expandfullwidth": "off",
                "animation": {
                    "type": "none",
                    "params": {
                        "speed": "medium",
                        "delay": "1",
                        "repeat": "0"
                    }
                },
                "IMAGECAPTION": "",
                "bleed": "off",
                "dropcap": "off",
                "linktype": "none",
                "imagefloat": "left",
                "externallinktarget": "off",
                "imageenabled": "off",
                "imagelink": "",
                "text_lang": {
                    "en": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">For customer service, PADI Club membership or subscription questions</span>, such as renewals, address changes, email, billing and account status, email: <a href=\"mailto:PADIClubcustserv@cdsfulfillment.com\">PADIClubcustserv@cdsfulfillment.com</a>. You can also call 800-666-0016, or write to Scuba Diving, P.O. Box 3286, Harlan, IA 51593-0466.</p>\n "
                },
                "imageurl": "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
                "language": "en",
                "text": "\n <p><span style=\"font-family: Geogrotesque-Bd;\">For customer service, PADI Club membership or subscription questions</span>, such as renewals, address changes, email, billing and account status, email: <a href=\"mailto:PADIClubcustserv@cdsfulfillment.com\">PADIClubcustserv@cdsfulfillment.com</a>. You can also call 800-666-0016, or write to Scuba Diving, P.O. Box 3286, Harlan, IA 51593-0466.</p>\n ",
                "cacheparam": 1,
                "devices": {
                    "tablet": "on",
                    "desktop": "on",
                    "phone": "on"
                },
                "channels": {
                    "applenews": {
                        "image": {
                            "enabled": "on"
                        }
                    }
                },
                "pagelink": "nones",
                "tag": "",
                "displayname": "Footer",
                "excludedchannels": [],
                "htmlclass": "",
                "id": "Comp-3676758",
                "articleid": "390697",
                "unit": {
                    "imagewidth": "px"
                },
                "component": "footer",
                "imagewidth": 250,
                "PublicationID": 4157
            }
        ],
        lang: 'en'
    },
};
