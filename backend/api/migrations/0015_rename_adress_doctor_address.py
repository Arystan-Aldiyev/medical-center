# Generated by Django 4.0 on 2022-12-06 14:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_rename_adress_patient_address_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='doctor',
            old_name='adress',
            new_name='address',
        ),
    ]
