# 🧠 Reconocimiento Facial

Sistema de reconocimiento facial con servidor en Python y una interfaz web en HTML. Este proyecto permite identificar rostros en tiempo real y mostrar información asociada si el rostro pertenece a una persona registrada.

## 🗂 Estructura del Proyecto

Reconocimiento-Facial/
├── app.py # Servidor Flask principal
├── static/
│ └── script.js # Lógica en JavaScript para actualizar info en tiempo real
├── templates/
│ └── index.html # Interfaz web
├── known/
│ └── [fotos].jpg # Imágenes de personas conocidas
└── README.md # Este archivo

markdown
Copiar
Editar

## ⚙️ Tecnologías Usadas

- **Python 3**
- **Flask** como servidor web
- **face_recognition** para reconocimiento facial
- **OpenCV** para capturar desde cámara
- **HTML + JS** para la interfaz web

## 🚀 Cómo Ejecutar

1. Instala dependencias necesarias:
   ```bash
   pip install flask face_recognition opencv-python
Coloca imágenes en la carpeta known/. Los nombres de los archivos deben reflejar el nombre de la persona (por ejemplo: Ulises Correa.jpg).

Ejecuta el servidor:

bash
Copiar
Editar
python app.py
Abre tu navegador en:

arduino
Copiar
Editar
http://localhost:5000
📦 Características
Detecta y reconoce rostros en tiempo real desde la cámara.

Muestra datos personalizados si el rostro coincide.

Actualiza automáticamente cada segundo usando JavaScript.

Puedes expandir el sistema agregando más datos o conectándolo con bases de datos.

📸 Ejemplo

👤 Autor
Ulises Correa – Practicante de Procesos
