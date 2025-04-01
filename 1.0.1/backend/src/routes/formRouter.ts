import { FormController } from '@/controller/form.controller';
import { FormServices } from "@/services/implement/form.services";
import { FormRepository } from "@/repository/implement/form.repository"
import { Router } from 'express';

const router = Router();

const formRepository = new FormRepository()
const formService = new FormServices(formRepository)
const formController = new FormController(formService)


router.post("/form", formController.create.bind(formController))
router.get("/form", formController.getAllform.bind(formController))

export default router;