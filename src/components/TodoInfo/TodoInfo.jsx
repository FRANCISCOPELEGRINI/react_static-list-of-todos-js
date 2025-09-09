export const TodoInfo = ({ componenteLista }) => {
  let lista;

  if (componenteLista.completed) {
    lista = (
      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">{componenteLista.title}</h2>
         {componenteLista.user ? (
          <a className="UserInfo" href={`mailto:${componenteLista.user.email}`}>
          {componenteLista.user.name}
       </a>
         ) : null}
      </article>
    );
  } else {
    lista = (
      <article className="TodoInfo">
        <h2 className="TodoInfo__title">{componenteLista.title}</h2>
        {componenteLista.user ? (
          <a className="UserInfo" href={`mailto:${componenteLista.user.email}`}>
          {componenteLista.user.name}
       </a>
         ) : null}
      </article>
    );
  }

  return lista;
};
