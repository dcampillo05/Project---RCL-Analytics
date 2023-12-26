from django.db import models

class Usuario(models.Model):
    email = models.EmailField(unique = True)
    data_Envio = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.email
    
