matricula_alumno = []

while True:
    nombre = input("Ingrese nombre: ")
    apellido = input("Ingrese apellido: ")
    matricula_alumno.append({"nombre": nombre, "apellido": apellido})
    
    opcion = input("¿Desea seguir matriculando? (s/n): ")
    if opcion.lower() != 's':
        break
for alumno in matricula_alumno:
    print(alumno)
