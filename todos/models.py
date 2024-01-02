from django.db import models
from PIL import Image


class Usuario(models.Model):
    email = models.EmailField(unique = True)
    data_Envio = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.email
    
class Carrosel(models.Model):
    imagem = models.ImageField(upload_to = 'todos/static/todos/IMG')

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img_path = self.imagem.path
        img = Image.open(img_path)

        largura_carrosel = 300

        img.thumbnail((largura_carrosel, largura_carrosel))

        img.save(img_path)