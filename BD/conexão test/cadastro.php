<?php
    include("connect.php");

    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $email = $_POST['eamil'];
    $senha = $_POST['senha'];

    $sql = "INSERT INTO alunos (nome, sobrenome, email, senha) 
            VALUES ('$nome', '$sobrenome', '$email', '$senha');";

    if(mysqli_query($conexao, $sql)) {
        echo "Usuário cadastrado com sucesso";
    } 
    else {
        echo "Erro" .mysqli_connect_error($conexao);
    } 
    mysqli_close($conexao);
?>