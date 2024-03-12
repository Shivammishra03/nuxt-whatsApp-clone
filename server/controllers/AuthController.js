import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
    try {
        const {email} = req.body;
        if(!email){
            return res.json({msg: "Email is required.", status: false});
        }
        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({ where: {email}});
        if(!user){
            return res.json( { msg: 'No account found with this email address.', status :false}) ;
        } else{
            return res.json({msg:"User Found", status:true, data:user });
        }
    } catch (err) {
        next(err);
    }
};

export const onBoardUser = async (req, res, next) => {
    try {
        const {email, name, about, image:profilePicture} = req.body;
        if(!email || !name || !about || !profilePicture){
            return res.send("Email, Name and Image are requried.");
        } 
        const prisma = getPrismaInstance();
        await prisma.user.create({
            data: {
                email,
                name,
                about,
                profilePicture
            },
        });
    } catch(err) {

    }
};

export const getAllUsers =  async (req,res,next)=> {
    try {
        const prisma = getPrismaInstance();
        const users = await  prisma.user.findMany({
            orderBy: {name: 'asc'},
            select: {
                id: true,
                email: true,
                name: true,
                profilePicture: true,
                about: true
            }
        });
        const usersGroupedByInitialLetter = {};
        users.forEach((user) => {
            const initialLetter =  user.name[0].toUpperCase();
            if (!usersGroupedByInitialLetter[initialLetter]){
               usersGroupedByInitialLetter [initialLetter] = [];
            }
            usersGroupedByInitialLetter[initialLetter].push(user);
        });
        res.status(200).send({users: usersGroupedByInitialLetter});
    } catch (error) {
        next(error)
    }
};