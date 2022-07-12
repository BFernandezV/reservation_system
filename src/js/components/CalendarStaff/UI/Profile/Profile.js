import UserMiniImage from "./User_Mini_Image";

const Profile = (props) => {
  return (
    <div className="flex gap-2">
      <UserMiniImage alt={props.alt} imageURL={props.imageURL}></UserMiniImage>
      {props.header && (
        <div className="flex flex-col justify-center">
          <h2 className="text-base font-semibold">{props.header}</h2>
          {props.description && (
            <span className="text-xs text-gray-500">{props.description}</span>
          )}
        </div>
      )}
    </div>
  );
};
export default Profile;
