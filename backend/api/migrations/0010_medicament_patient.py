# Generated by Django 4.0 on 2022-12-06 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_medicament'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicament',
            name='patient',
            field=models.BigIntegerField(default=1),
            preserve_default=False,
        ),
    ]
