import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main () {
    await prisma.donation.deleteMany();
    const alice = await prisma.donation.create({
        data:{
            email: "alice@gmail.com",
            displayName: "Alice Kenny",
            count: 50,
        }
    });
    const john = await prisma.donation.create({
        data:{
            email: "john@gmail.com",
            displayName: "John Doe",
            count: 500,
            mobile: "0623456789",
            message: "Plant the trees save earth!"
        }
    });


    console.log({alice}, {john})
}

main()
.catch((e) =>{
    console.log(e);
})
