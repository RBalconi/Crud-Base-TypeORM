<div align="center">
  <img src="https://user-images.githubusercontent.com/18688446/156849342-809790ed-df9d-4497-b94e-9cff0540c7a0.png" alt="CRUD Logo" /> 
  <br/> 
  <h1>API Crud-Base</h1>
  <h3>Base de CRUD feito em NodeJS com TypeORM</h3>
</div>

<p align="center">
    <img src="https://img.shields.io/static/v1?label=Type&message=Script&color=3178C6&style=flat-square&logo=TypeScript" alt="TypeScript" />
    <img src="https://img.shields.io/static/v1?label=Node&message=JS&color=7CFC00&style=flat-square&logo=Node.js" alt="NodeJS" />
    <img src="https://img.shields.io/static/v1?label=Type&message=ORM&color=FF7200&style=flat-square&logo=TypeORM" alt="TypeORM" />
    <img src="https://img.shields.io/static/v1?label=Express&message=JS&color=888888&style=flat-square&logo=Express" alt="Express" />
</p>

## Como usar

- Precisará criar um banco de dados com o nome `crud-base` em PostgreSQL, para isso rode o Script localizado na raiz do projeto:

  ```
  $ ./script-create-data-base.sh
  ```

- Após, execute no terminal:
  ```
  $ yarn
  ```
- Rode as Migrations:

  ```
  $ yarn typeorm migrations:run
  ```

- Entao execute a API:
  ```
  $ yarn dev
  ```

#### Abaixo um exemplo de inserção:

Metodo: `POST` </br>
EndPoint: `localhost:3000/person/create` </br>
Body:

```json
{
  "name": "Teste",
  "cellphone": "00000000000",
  "phone": "1111111111",
  "address": "Rua teste",
  "email": "test@1223.com"
}
```

Response:

```json
{
  "name": "Teste",
  "cellphone": "00000000000",
  "phone": "1111111111",
  "address": "Rua teste",
  "email": "test@1223.com",
  "id": "17ca2ce0-2955-49d3-8e42-1ba3b741f841",
  "createdAt": "2022-03-06T22:01:27.586Z",
  "updatedAt": null
}
```

---

## Resultado Final

#### Person

- Banco de dados:
![image](https://user-images.githubusercontent.com/18688446/156944253-7321a608-7465-4aa9-9cd6-55d21fe34657.png)
- JSON getAll:

```json
[
  {
    "name": "Teste",
    "cellphone": "00000000000",
    "phone": "1111111111",
    "address": "Rua teste",
    "email": "test@1223.com",
    "id": "17ca2ce0-2955-49d3-8e42-1ba3b741f841",
    "createdAt": "2022-03-06T22:01:27.586Z",
    "updatedAt": null
  }
]
```

#### Course

- Banco de dados: <br/>
![image](https://user-images.githubusercontent.com/18688446/156944280-6c30069f-4a98-46b1-9fb2-fb2f1842f112.png)
- JSON getAll:

```json
[
  {
    "id": "eed205f0-1440-412b-a347-fde68be2948d",
    "createdAt": "2022-03-06T22:04:00.715Z",
    "updatedAt": null,
    "name": "Teste",
    "situation": "ACTIVE"
  }
]
```

#### Students

- Banco de dados:
![image](https://user-images.githubusercontent.com/18688446/156944302-6ef3bed8-33a6-4508-99bb-9ef0661958d3.png)
- JSON getAll:

```json
[
  {
    "id": "615182f4-328d-464f-b085-03f6e3cb3f50",
    "createdAt": "2022-03-06T21:49:05.795Z",
    "updatedAt": null,
    "course": {
      "id": "eed205f0-1440-412b-a347-fde68be2948d",
      "createdAt": "2022-03-06T22:04:00.715Z",
      "updatedAt": null,
      "name": "Teste",
      "situation": "ACTIVE"
    },
    "person": {
      "id": "17ca2ce0-2955-49d3-8e42-1ba3b741f841",
      "createdAt": "2022-03-06T22:01:27.586Z",
      "updatedAt": null,
      "name": "Teste",
      "cellphone": "00000000000",
      "phone": "1111111111",
      "address": "Rua teste",
      "email": "test@1223.com"
    }
  }
]
```

---

## EndPoints

#### Person

```
/person
├───/getAll
├───/create
├───/update
|      └───/{id}
└───/delete
       └───/{id}
```

#### Course

```
/course
├───/getAll
├───/create
├───/update
|      └───/{id}
└───/delete
       └───/{id}
```

#### Student

```
/student
├───/getAll
├───/create
├───/update
|      └───/{id}
└───/delete
       └───/{id}
```

---

<p align="center">
  Desenvolvido com 💜 por <a href="https://www.linkedin.com/in/rafael-balconi/">RBalconi</a>
</p>
