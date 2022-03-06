<div align="center">
  <img src="https://user-images.githubusercontent.com/18688446/156849342-809790ed-df9d-4497-b94e-9cff0540c7a0.png" alt="Ecoleta Logo" /> 
  <br/> 
  <h1>API Crud-Base</h1>
  <h3>Base de CRUD feito em Java com Springboot</h3>
</div>

<p align="center">
    <img src="https://img.shields.io/static/v1?label=Java&message=11&color=DC143C&style=flat-square&logo=Java" alt="Java" />
    <img src="https://img.shields.io/static/v1?label=SpringBoot&message=2.6.4&color=7CFC00&style=flat-square&logo=SpringBoot" alt="SpringBoot" />
    <img src="https://img.shields.io/static/v1?label=Apache Maven&message=3.6.3&color=DC143C&style=flat-square&logo=Apache Maven" alt="Apache Maven" />
    <img src="https://img.shields.io/static/v1?label=PostgreSQL&message=14.2&color=1E90FF&style=flat-square&logo=PostgreSQL&logoColor=1E90FF" alt="PostgreSQL" />

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

- Entao execute a API pela IDE:
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
  ![image](https://user-images.githubusercontent.com/18688446/156852703-036646a8-2530-4d0e-9071-0fbfd3b5eabd.png)
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

- Banco de dados:
  ![image](https://user-images.githubusercontent.com/18688446/156853320-f7b2b54c-ca04-4893-b994-216038796667.png)
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
`
```

#### Students

- Banco de dados:
  ![image](https://user-images.githubusercontent.com/18688446/156853599-d8637363-063f-4125-aa0d-f79b08abc435.png)
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

#### Students

```
/students
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
