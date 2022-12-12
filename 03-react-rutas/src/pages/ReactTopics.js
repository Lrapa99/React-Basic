import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor delectus
        alias exercitationem accusamus odit eveniet quaerat! Sequi nulla dolorem
        culpa, nam aliquam ab reiciendis minus eaque obcaecati accusantium magni
        incidunt!
      </p>
    </div>
  );
};

const ReactTopics = () => {
  // let match = useRouteMatch();
  // console.log(match);
  //"path" nos permite construir rutas relativas <Route>, mientras que "url" nos permite construir enlaces relativos <Link> o <NavLink>.

  let { path, url } = useRouteMatch();

  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Components</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            delectus, officia quaerat vero recusandae qui sint quis ut
            reprehenderit laborum ex exercitationem ad quia iusto pariatur
            quisquam consequatur deleniti vitae.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
