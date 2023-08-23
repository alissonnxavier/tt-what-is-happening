import serverAuth from "@/libs/ServerAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/libs/prismadb';

export default async function handles(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'POST' && req.method !== 'DELETE') {
        return res.status(405).end();
    }

    try {
        const { postId } = req.body;
        const { currentUser } = await serverAuth(req, res);

        if (!postId || typeof postId !== 'string') {
            throw new Error('Invalid ID');
        }

        const post = await prisma.post.findUnique({
            where: {
                id: postId
            }
        });

        if (!post) {
            throw new Error('Invalid ID');
        }

        let updatedLikedIds = [ ... (post.likedIds) || []];

        if(req.method === 'POST'){
            updatedLikedIds.push(currentUser.id);
        };

        if(req.method === 'DELETE'){
            updatedLikedIds = updatedLikedIds.filter((likedId) => likedId !== currentUser?.id);
        }

        const updatePost = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                likedIds: updatedLikedIds
            }
        });

        return res.status(200).json(updatePost);

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}