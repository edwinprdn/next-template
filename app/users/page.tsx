import UserTable from "@/components/UserTable";
import { title } from "@/components/primitives";

import { User } from "./column"

async function getUsers(): Promise<User[]> {
	const res = await fetch('http://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users')
	const data = await res.json()
	return data
}

export default async function UsersPage() {
	const users = await getUsers()

	return (
		<div>
			<UserTable users={users} />
		</div>
	);
}
