# Increment-Counter
Contador incremental.   
Desarrollado con React, Expo, Firebase y ReactNativePaper.    

***

- La aplicación consiste en una interfaz gráfica que muestra un contador y un botón para incrementar el valor del mismo.    
- Cada vez que se presiona el botón el valor será incrementado y automaticamente guardado en la base de datos de firestore.   
- Además se implementaron funcionalidades de escucha para poder detectar en tiempo real los cambios en el objeto seleccionado y mostrarlos en la interfaz gráfica.    
- Cuando se pierde la conexión con firestone, el sistema sigue ejecutándose con normalidad hasta que se restablece la conexión, cuando esto pasa, los datos se cargan en la base de datos y la interfaz se actualiza con los ultimos valores obtenidos.  
- Reglas de seguridad fueron agregadas en la base de datos para permitir solo la lectura y la actualización del objeto en cuestión. 
- El manejo de errores fue implementado para evitar crasheos indeseados.    

## <ins>UI:</ins>   
![Screenshot_20230307-124254](https://user-images.githubusercontent.com/75407068/223478646-af2cc35e-0b18-4f65-8828-d28f39b80334.png)
