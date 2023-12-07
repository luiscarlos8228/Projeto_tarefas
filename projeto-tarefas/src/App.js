function List() {
  return (
  <>  <form>
  <input type="submit" value="dale"/>
  <label><span>nova tarefa</span>
      <input type="text" name="tarefas" placeholder="banhar"/>
  </label>
</form>
<ul>
  <li><input type="checkbox" name="" id=""/>lavar o macaco <input type="button" value="deletar"/></li>
  <li><input type="checkbox" name="" id=""/>muçar<input type="button" value="deletar"/></li>
  <li><input type="checkbox" name="" id=""/>carinho no gato<input type="button" value="deletar"/></li>
</ul></>
  );
}
function Tarefa({children}){
  return <li><input type="checkbox" name="" id=""/>{children} <input type="button" value="deletar"/></li>
}

function App(){
  return <><Tarefa>titulo teste</Tarefa></>

}



export default App;
