'use client'
import { title } from "@/components/primitives";
import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import DynamicModal from "@/components/DynamicModal";

async function getProduct() {
	const res = await fetch('https://dummyjson.com/products');
	return res.json();
}

export default async function ProductsPage() {
	const data = await getProduct();
	const list = data.products;

	function handleOpenChange(): void {
		throw new Error("Function not implemented.");
	}

	return (
		<div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
			
			{list.map((item:any) => (
				<Card shadow="sm">
				<CardBody className="overflow-visible p-0">
					<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={item.title}
					className="w-full object-cover h-[180px]"
					src={item.thumbnail}
					/>
				</CardBody>
				<CardFooter className="text-small justify-between">
					<b>{item.title}</b>
					<p className="text-default-500">${item.price}</p><br />
					
				</CardFooter>
				
				</Card>
			))}
		</div>
	);
}
