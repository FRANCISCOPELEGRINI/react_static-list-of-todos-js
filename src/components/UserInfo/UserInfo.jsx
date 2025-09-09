// Add the required props
export const UserInfo = ({usuario}) => (
    <>
    <a className="UserInfo" href={`mailto:${usuario.email}`}>
          {usuario.name}
    </a>
    </>
);
