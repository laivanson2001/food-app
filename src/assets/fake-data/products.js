// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
	{
		id: "01",
		title: "Hamburger Gà",
		price: 60000,
		image01: product_01_image_01,
		image02: product_01_image_02,
		image03: product_01_image_03,
		category: "Burger",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
	},

	{
		id: "02",
		title: "Bánh pizza chay",
		price: 150000,
		image01: product_02_image_01,
		image02: product_02_image_02,
		image03: product_02_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},
	{
		id: "05",
		title: "Hamburger pho mai",
		price: 65000,
		image01: product_05_image_01,
		image02: product_05_image_02,
		image03: product_05_image_03,
		category: "Burger",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},
	{
		id: "06",
		title: "Hamburger pho mai đặc biệt",
		price: 70000,
		image01: product_01_image_01,
		image02: product_01_image_02,
		image03: product_01_image_03,
		category: "Burger",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "07",
		title: "Pizza hải sản",
		price: 200000,
		image01: product_02_image_02,
		image02: product_02_image_01,
		image03: product_02_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "08",
		title: "Pizza pho mai mỏng",
		price: 99000,
		image01: product_03_image_02,
		image02: product_03_image_01,
		image03: product_03_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "09",
		title: "Pizza nấm",
		price: 110000,
		image01: product_04_image_02,
		image02: product_04_image_01,
		image03: product_04_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "10",
		title: "Hamburger đơn giản",
		price: 50000,
		image01: product_05_image_02,
		image02: product_05_image_01,
		image03: product_05_image_03,
		category: "Burger",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "11",
		title: "Bánh mì giòn",
		price: 20000,
		image01: product_06_image_01,
		image02: product_06_image_02,
		image03: product_06_image_03,
		category: "Bread",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "12",
		title: "Bánh mì sữa",
		price: 35000,
		image01: product_06_image_02,
		image02: product_06_image_01,
		image03: product_06_image_03,
		category: "Bread",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "13",
		title: "Bánh mì dài",
		price: 40000,
		image01: product_06_image_03,
		image02: product_06_image_02,
		image03: product_06_image_03,
		category: "Bread",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},
];

export default products;
