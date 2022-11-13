import { avatars } from "./data";
import '../Steps.css';
import React from "react";

const Avatar = ({ avatar, setAvatar }: { avatar: string, setAvatar: React.Dispatch<React.SetStateAction<string>> }): JSX.Element => {
    return (
        <div className="step avatars">
            <h2 className="capitalize">Choose your avatar</h2>
            <div className="avatar_group">
                {
                    avatars.map((avatar: any, key: number) => (
                        <img key={`are${key}`} onClick={() => setAvatar(key.toString())} src={avatar.image} alt='avatar' />
                    ))
                }
            </div>
        </div>
    )
}

export default Avatar;