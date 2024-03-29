# AWS WorkShop: Proceso Tarjetas de crédito usando Step Functions


## Tabla de Contenidos

1. [🚀 Informacion General](#-informacion-general)
2. [💻 Tecnologias](#-tecnologias)
3. [📚 Recursos](#-recursos)
4. [✒️ Autores](#%EF%B8%8F-autores)

## 🚀 Informacion General

---

<p align="justify">
La siguiente Step Function se encarga de simular el proceso de solicitud de una tarjeta de crédito, siendo la siguiente imagen el resultado final de la construcción de la maquina de estados 

Para ello se ingresara el monto a solicitar, si es mayor o igual a **5000** entonces se detendrá el proceso ya que se requiere de una autorización humana, en este caso se enviara un correo y se esperara que el usuario abra el link que contendrá el token de validara que el proceso siga ejecutándose, si el monto es menor a **5000** entonces el proceso seguirá su curso normal, el cual es un proceso paralelo el cual se encarga de validar la identidad y la direccion del usuario, pasadas estas validaciones, se obtendran de dynamo la lista de bancos conocidos, y se iterara sobre cada uno para obtener su puntuacion
</p>


## 💻 Tecnologias

---

<div align="center">

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/AWS_LAMBDA-FF9900?style=for-the-badge&logo=awslambda&logoColor=white" alt="AWS Lambda" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/AWS SNS-FF9900?style=for-the-badge&logo=amazonsimpleemailservice&logoColor=DD344C" alt="AWS SNS" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/AWS DynamoDB-FF9900?style=for-the-badge&logo=amazondynamodb&logoColor=4053D6" alt="AWS DynamoDB" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/aws-badge?style=for-the-badge&logo=awsstepfunctions&label=Step%20Functions&labelColor=FF9900&color=FF9900" alt="AWS Step functions" />&nbsp;&nbsp;
</div>

## 📚 Recursos

---
- [Notion Pasos](https://hazel-orange-2f0.notion.site/AWS-WorkShop-Proceso-Tarjetas-de-cr-dito-usando-Step-Functions-20373321554b4010b76b1aa5f524e17d)


## ✒️ Autores

---

* **Ochoa Virgen Jesus Daniel** - *Desarrollador* - [JDOV7](https://github.com/JDOV7)